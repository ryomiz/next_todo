import { memo } from 'react'

import type { Task } from 'src/types'

import { SecondaryButton } from 'src/components/general/button/SecondaryButton'
import { useAuth } from 'src/hooks/useAuth'
import { useTask } from 'src/hooks/useTask'

type Props = {
  task: Task
}

export const CompletedTask: React.VFC<Props> = memo((props) => {
  const { task } = props
  const { duration, todo } = task

  const { checkUser } = useAuth()
  const { revertTask, discardTask } = useTask()

  const handleRevert = (tsk: Task) => {
    if (checkUser(tsk.createdBy)) {
      revertTask(tsk)
    }
  }

  const handleDiscard = (tsk: Task) => {
    if (checkUser(tsk.createdBy)) {
      discardTask(tsk)
    }
  }

  return (
    <div className="relative flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <span className="absolute bottom-1 left-2 ml-2 text-xs">
        by {task.createdBy}
      </span>
      <p className="order-2 w-48 truncate">{todo}</p>
      <div className="flex gap-2 order-3 ml-auto">
        <SecondaryButton color="indigo" onClick={() => handleRevert(task)}>
          戻す
        </SecondaryButton>
        <SecondaryButton color="red" onClick={() => handleDiscard(task)}>
          削除
        </SecondaryButton>
      </div>
    </div>
  )
})

CompletedTask.displayName = 'CompletedTask'
