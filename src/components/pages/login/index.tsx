import { memo } from 'react'

import { LoginForm } from './parts/LoginForm'

import { Layout } from 'src/components/layout/Layout'

export const AssetsLogin: React.VFC = memo(() => {
  return (
    <Layout>
      <h1 className="mb-4 text-center text-3xl font-bold">ログイン</h1>
      <LoginForm />
    </Layout>
  )
})
AssetsLogin.displayName = 'AssetsLogin'
