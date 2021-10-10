import { memo, useEffect } from 'react'

import { CompletedTaskList } from './CompletedTaskList'
import { UncompletedTaskList } from './UncompletedTaskList'

import { useSetTask } from 'src/hooks/useSetTask'

export const TaskList: React.VFC = memo(() => {
  const { setData } = useSetTask()
  useEffect(() => {
    setData()
  }, [])
  return (
    <div className="flex flex-col gap-6 pt-20 w-6/12">
      <UncompletedTaskList />
      <CompletedTaskList />
    </div>
  )
})

TaskList.displayName = 'TaskList'
