import { NextSeo } from 'next-seo'

import type { NextPage } from 'next'

import { AssetsLogin } from 'src/components/pages/login'

const LoginPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="ログインページ - Next.js × Nest.js Todoアプリ"
        description="ログインページです"
      />
      <AssetsLogin />
    </>
  )
}

export default LoginPage
