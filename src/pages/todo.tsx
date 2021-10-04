import { NextPage } from 'next'

import { TaskForm } from 'src/components/TaskForm'
import { TaskList } from 'src/components/TaskList'
import { Layout } from 'src/components/layout/Layout'

const TodoPage: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-between mb-12">
        <TaskForm />
        <TaskList />
      </div>
    </Layout>
  )
}

export default TodoPage
