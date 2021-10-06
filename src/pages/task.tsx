import { NextPage } from 'next'
import { Toaster } from 'react-hot-toast'

import { TaskForm } from 'src/components/TaskForm'
import { TaskList } from 'src/components/TaskList'
import { Layout } from 'src/components/layout/Layout'

const TaskPage: NextPage = () => {
  return (
    <Layout>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <div className="flex justify-between mb-12">
        <TaskForm />
        <TaskList />
      </div>
    </Layout>
  )
}

export default TaskPage
