'use client'

import MainWrapper from '@/components/Provider/MainWrapper'
import Login from '@/components/Login/Login'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session.data) {
      router.push('/user')
    }
    console.log(session)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])
  return (
    <MainWrapper>
      <Login />
    </MainWrapper>
  )
}
