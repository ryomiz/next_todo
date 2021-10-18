import { NextSeo } from 'next-seo'

import type { NextPage } from 'next'

import { AssetsIndex } from 'src/components/pages/index'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Next.js × Nest.js Todoアプリ"
        description="Next.jsとNest.jsを用いて作成したTODOアプリです。"
      />
      <AssetsIndex />
    </>
  )
}

export default Home
