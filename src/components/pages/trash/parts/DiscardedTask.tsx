import { memo } from 'react'

import type { Task } from 'src/types'

import { SecondaryButton } from 'src/components/general/button/SecondaryButton'
import { useAuth } from 'src/hooks/useAuth'
import { useTask } from 'src/hooks/useTask'

type Props = {
  task: Task
}

export const DiscardedTask: React.VFC<Props> = memo((props) => {
  const { task } = props
  const { duration, todo } = task

  const { checkUser } = useAuth()
  const { deleteTask } = useTask()

  const handleDelete = (tsk: Task) => {
    if (checkUser(tsk.createdBy)) {
      deleteTask(tsk)
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
        <SecondaryButton onClick={() => handleDelete(task)} color="red">
          消去
        </SecondaryButton>
      </div>
    </div>
  )
})

DiscardedTask.displayName = 'DiscardedTask'
