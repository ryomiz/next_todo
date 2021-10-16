import { memo } from 'react'
import { useForm } from 'react-hook-form'

import { LoginInput } from './LoginInput'

import type { UserInfo } from 'src/types'

import { useAuth } from 'src/hooks/useAuth'

export const LoginForm: React.VFC = memo(() => {
  const { register, handleSubmit } = useForm<UserInfo>()

  const { login } = useAuth()

  const onSubmit = async (data: UserInfo) => login(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center py-20"
    >
      <LoginInput
        label="ユーザー名"
        type="text"
        name="username"
        register={register}
      />
      <LoginInput
        label="パスワード"
        type="password"
        name="password"
        register={register}
      />

      <input type="submit" value="ログイン" className="btn-secondary mt-2" />
    </form>
  )
})

LoginForm.displayName = 'LoginForm'
