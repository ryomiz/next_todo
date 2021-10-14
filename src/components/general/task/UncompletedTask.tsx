import type { Task } from 'src/types'

import { SecondaryButton } from 'src/components/general/button/SecondaryButton'
import { useAuth } from 'src/hooks/useAuth'
import { useTask } from 'src/hooks/useTask'

type Props = {
  task: Task
}

export const UncompletedTask: React.VFC<Props> = (props) => {
  const { task } = props
  const { duration, todo } = task

  const { checkUser } = useAuth()
  const { completeTask } = useTask()

  const handleComplete = (tsk: Task) => {
    if (checkUser(tsk.createdBy)) {
      completeTask(tsk)
    }
  }
  return (
    <div className="relative flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <span className="absolute bottom-1 left-2 ml-2 text-xs">
        by {task.createdBy}
      </span>
      <p className="order-2 w-48 truncate">{todo}</p>
      <div className="flex gap-3 order-3 ml-auto">
        <SecondaryButton color="gray" onClick={() => handleComplete(task)}>
          編集
        </SecondaryButton>
        <SecondaryButton color="green" onClick={() => handleComplete(task)}>
          完了
        </SecondaryButton>
      </div>
    </div>
  )
}
