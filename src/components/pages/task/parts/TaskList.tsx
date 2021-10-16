import { memo, useEffect } from 'react'

import { CompletedTaskList } from './CompletedTaskList'
import { UncompletedTaskList } from './UncompletedTaskList'
import { UpdateForm } from './UpdateForm'

import { useModal } from 'src/hooks/useModal'
import { useSetTask } from 'src/hooks/useSetTask'

export const TaskList: React.VFC = memo(() => {
  const { setData } = useSetTask()
  useEffect(() => {
    setData()
  }, [])

  const { UpdateModal } = useModal()
  return (
    <div className="flex flex-col gap-6 pt-20 w-6/12">
      <UncompletedTaskList />
      <CompletedTaskList />
      <UpdateModal>
        <UpdateForm />
      </UpdateModal>
    </div>
  )
})

TaskList.displayName = 'TaskList'
