import { TaskForm } from './parts/TaskForm'
import { TaskList } from './parts/TaskList'

import { Layout } from 'src/components/layout/Layout'

export const AssetsTask: React.VFC = () => {
  return (
    <Layout>
      <div className="flex justify-between mb-12">
        <TaskForm />
        <TaskList />
      </div>
    </Layout>
  )
}
