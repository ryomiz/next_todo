import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { AssetsTask } from 'src/components/pages/task'

const TaskPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="タスク一覧 - Next.js × Nest.js Todoアプリ"
        description="未完了のタスク、完了したタスク一覧を表示するページです"
      />
      <AssetsTask />
    </>
  )
}

export default TaskPage
