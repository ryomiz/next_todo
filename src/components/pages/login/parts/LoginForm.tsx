import { memo } from 'react'
import { useForm } from 'react-hook-form'

import type { UserInfo } from 'src/types'

import { Input } from 'src/components/general/input/Input'
import { useAuth } from 'src/hooks/useAuth'

export const LoginForm: React.VFC = memo(() => {
  const { register, handleSubmit } = useForm<UserInfo>()
  const onSubmit = async (data: UserInfo) => login(data)

  const { login } = useAuth()
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center py-20"
    >
      <Input
        label="ユーザー名"
        type="text"
        name="username"
        register={register}
      />
      <Input
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
