import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

import type { NextPage } from 'next'
import type { LoginForm } from 'src/types'

import { Input } from 'src/components/general/input/Input'
import { Layout } from 'src/components/layout/Layout'
import { axiosInstance } from 'src/lib/axiosInstance'
import { jwtToken } from 'src/stores'

const LoginPage: NextPage = () => {
  const setToken = useSetRecoilState(jwtToken)
  const { register, handleSubmit } = useForm<LoginForm>()
  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await axiosInstance.post('auth/login', data)
      const token = res.data.access_token
      if (token) {
        setToken(token)
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <Layout>
      <h1 className="mb-4 text-center text-3xl font-bold">ログイン</h1>
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

        <input
          type="submit"
          value="ログイン"
          className="mt-10 px-3 py-1 text-white font-bold bg-pink-400 hover:bg-pink-600 rounded focus:outline-none cursor-pointer focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
        />
      </form>
    </Layout>
  )
}

export default LoginPage
