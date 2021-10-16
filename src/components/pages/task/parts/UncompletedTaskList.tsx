import { memo } from 'react'

import { UncompletedTask } from './UncompletedTask'

import { useSetTask } from 'src/hooks/useSetTask'

export const UncompletedTaskList: React.VFC = memo(() => {
  const { uncompleted } = useSetTask()

  return (
    <div className="mb-8 rounded-lg">
      <h2 className="mb-4 text-blue-600 text-xl">未完了のタスク</h2>
      <ul className="flex flex-col gap-4">
        {uncompleted.map((task) => (
          <li key={task.id}>
            <UncompletedTask task={task} />
          </li>
        ))}
      </ul>
    </div>
  )
})

UncompletedTaskList.displayName = 'UncompletedTaskList'
