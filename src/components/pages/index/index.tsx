import Image from 'next/image'
import { memo } from 'react'

import topImg from 'public/top.png'
import { PrimaryButton } from 'src/components/general/button/PrimaryButton'
import { Layout } from 'src/components/layout/Layout'

export const AssetsIndex: React.VFC = memo(() => {
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
          <PrimaryButton isLarge={true} href="/task">
            Get Started
          </PrimaryButton>
        </article>
      </main>
    </Layout>
  )
})

AssetsIndex.displayName = 'AssetsIndex'
