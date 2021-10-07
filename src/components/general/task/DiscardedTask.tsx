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
    <div className="flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <p className="order-2">{todo}</p>
      <div className="flex gap-2 order-3 ml-auto">
        <SecondaryButton onClick={() => deleteTask(task)} color="red">
          消去
        </SecondaryButton>
      </div>
    </div>
  )
}
