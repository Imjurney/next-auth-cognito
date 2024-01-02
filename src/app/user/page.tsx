import ButtonClient from '@/components/Button/Button.Client'
import Card from '@/components/Card/Card'
import MainWrapper from '@/components/Provider/MainWrapper'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
async function userPage() {
  const session = await getServerSession(authOptions)

  return (
    <MainWrapper>
      <div className="box">
        <Card name={session?.user.name} />
        <ButtonClient>로그아웃</ButtonClient>
      </div>
    </MainWrapper>
  )
}

export default userPage
