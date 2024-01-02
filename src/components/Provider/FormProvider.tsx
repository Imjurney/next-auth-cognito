import { PropsWithChildren } from 'react'
import { FieldValues, UseFormHandleSubmit, useForm } from 'react-hook-form'

interface FormProviderProps extends PropsWithChildren {
  handleSubmit: () => void
}

export default function FormProvider({ ...props }: FormProviderProps) {
  const { children, handleSubmit } = props

  return (
    <form onSubmit={handleSubmit} className="box gap-4">
      {children}
    </form>
  )
}
