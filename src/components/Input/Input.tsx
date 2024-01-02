'use client'

import { HTMLInputTypeAttribute } from 'react'
import { useController, type UseControllerProps } from 'react-hook-form'
import clsx from 'clsx'
interface InputProps extends UseControllerProps {
  placeholder: string
  defaultValue?: string
  type?: HTMLInputTypeAttribute | undefined
  state: 'default' | 'error'
}

const stateTypes = {
  default: 'border border-neutral-200',
  error: 'border border-red-500',
}
export default function Input({
  control,
  name,
  placeholder,
  ...props
}: InputProps) {
  const { defaultValue = '', state } = props
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: defaultValue,
  })
  return (
    <div className="flex flex-col gap-0.5 indent-1 mt-1">
      <label className="text-indigo-900 text-sm" htmlFor={field.name}>
        {field.name}
      </label>
      <input
        id={field.name}
        type={props.type}
        className={clsx(
          'px-2.5 py-2 text-sm rounded-xl  outline-none focus:outline-indigo-500',
          stateTypes[state]
        )}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        ref={field.ref}
      />
    </div>
  )
}
