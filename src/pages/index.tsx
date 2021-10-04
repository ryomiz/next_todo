import Image from 'next/image'

import type { NextPage } from 'next'

import topImg from 'public/top.png'
import { PrimaryButton } from 'src/components/general/button/PrimaryButton'
import { Layout } from 'src/components/layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="px-2">
        <article className="flex flex-col items-center py-12">
          <h1 className="mb-16 text-3xl">
            <span className="text-blue-400">Next.js</span> ×
            <span className="text-blue-600"> TypeScript</span>
          </h1>
          <div className="mb-16">
            <Image src={topImg} placeholder="blur" alt="WEB" />
          </div>
          <PrimaryButton isLarge={true}>GET STARTED</PrimaryButton>
        </article>
      </main>
    </Layout>
  )
}

export default Home
