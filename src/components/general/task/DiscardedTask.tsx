import { SecondaryButton } from '../button/SecondaryButton'

import { useTask } from 'src/hooks/useTask'
import { Task } from 'src/types'

type Props = {
  task: Task
}

export const DiscardedTask: React.VFC<Props> = (props) => {
  const { task } = props
  const { duration, todo } = task

  const { deleteTask } = useTask()
  return (
    <div className="relative flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <span className="absolute bottom-1 left-2 ml-2 text-xs">
        {' '}
        by {task.createdBy}
      </span>
      <p className="order-2 w-48 truncate">{todo}</p>
      <div className="flex gap-2 order-3 ml-auto">
        <SecondaryButton onClick={() => deleteTask(task)} color="red">
          消去
        </SecondaryButton>
      </div>
    </div>
  )
}
