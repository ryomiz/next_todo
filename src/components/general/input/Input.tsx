import { memo } from 'react'

import type { UseFormRegister } from 'react-hook-form'
import type { LoginForm } from 'src/types'

type Props = {
  label: string
  type: 'text' | 'password'
  name: 'username' | 'password'
  register: UseFormRegister<LoginForm>
}

export const Input: React.VFC<Props> = memo((props) => {
  const { label, type, name, register } = props
  return (
    <div className="flex flex-col gap-1">
      <label className="font-bold">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="px-2 py-1 border-2 rounded"
      />
    </div>
  )
})

Input.displayName = 'Input'
