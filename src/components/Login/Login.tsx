'use client'

import { useForm } from 'react-hook-form'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import FormProvider from '@/components/Provider/FormProvider'
import Title from '@/components/Title/Title'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

type InputProps = {
  email?: string
  password?: string
}

export default function Login() {
  const [error, setError] = useState<boolean>(false)
  const { control, handleSubmit } = useForm<InputProps, any>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <FormProvider
      handleSubmit={handleSubmit(async (data) => {
        const login = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false,
        })
        if (login?.status === 401) {
          setError(true)
        }
      })}
    >
      <Title />
      <div className="relative">
        <Input
          type="email"
          control={control}
          placeholder="이메일을 입력해주세요."
          name="email"
          defaultValue=""
          state={error ? 'error' : 'default'}
        />
        {error && (
          <small className="-mt-3 indent-2 text-red-500 absolute -bottom-5 text-xs">
            이메일을 확인해주세요
          </small>
        )}
      </div>
      <div className="relative">
        <Input
          type="password"
          control={control}
          placeholder="비밀번호를 입력해주세요."
          name="password"
          defaultValue=""
          state={error ? 'error' : 'default'}
        />
        {error && (
          <small className="-mt-3 indent-2 text-red-500 absolute -bottom-5 text-xs">
            비밀번호를 확인해주세요
          </small>
        )}
      </div>
      <Button>Login</Button>
    </FormProvider>
  )
}
