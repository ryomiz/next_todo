import { memo } from 'react'

import { DiscardedTaskList } from './parts/DiscardedTaskList'

import { Layout } from 'src/components/layout/Layout'

export const AssetsTrash: React.VFC = memo(() => {
  return (
    <Layout>
      <DiscardedTaskList />
    </Layout>
  )
})

AssetsTrash.displayName = 'AssetsTrash'
