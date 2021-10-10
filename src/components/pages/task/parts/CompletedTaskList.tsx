import { memo } from 'react'

import { CompletedTask } from 'src/components/general/task/CompletedTask'
import { useSetTask } from 'src/hooks/useSetTask'

export const CompletedTaskList: React.VFC = memo(() => {
  const { completed } = useSetTask()

  return (
    <div className="mb-8 rounded-lg">
      <h2 className="mb-4 text-red-600 text-xl">完了したタスク</h2>
      <ul className="flex flex-col gap-4">
        {completed.map((task) => (
          <li key={task.id}>
            <CompletedTask task={task} />
          </li>
        ))}
      </ul>
    </div>
  )
})

CompletedTaskList.displayName = 'CompletedTaskList'
