import { NextPage } from 'next'

import { DiscardedTaskList } from 'src/components/DiscardedTaskList'
import { Layout } from 'src/components/layout/Layout'

const TrashPage: NextPage = () => {
  return (
    <Layout>
      <DiscardedTaskList />
    </Layout>
  )
}

export default TrashPage
