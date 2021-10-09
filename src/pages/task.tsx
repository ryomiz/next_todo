import { NextPage } from 'next'

import { TaskForm } from 'src/components/TaskForm'
import { TaskList } from 'src/components/TaskList'
import { MyToaster } from 'src/components/general/toaster/MyToaster'
import { Layout } from 'src/components/layout/Layout'

const TaskPage: NextPage = () => {
  return (
    <Layout>
      <MyToaster />
      <div className="flex justify-between mb-12">
        <TaskForm />
        <TaskList />
      </div>
    </Layout>
  )
}

export default TaskPage
