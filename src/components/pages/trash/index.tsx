import { DiscardedTaskList } from './parts/DiscardedTaskList'

import { Layout } from 'src/components/layout/Layout'

export const AssetsTrash: React.VFC = () => {
  return (
    <Layout>
      <DiscardedTaskList />
    </Layout>
  )
}
