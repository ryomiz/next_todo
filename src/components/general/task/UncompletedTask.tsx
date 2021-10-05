import type { Task } from 'src/types'

import { SecondaryButton } from 'src/components/general/button/SecondaryButton'
import { useTask } from 'src/hooks/useTask'

type Props = {
  task: Task
}

export const UncompletedTask: React.VFC<Props> = (props) => {
  const { task } = props
  const { duration, todo } = task

  const { completeTask } = useTask()
  return (
    <div className="flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <p className="order-2">{todo}</p>
      <div className="flex gap-3 order-3 ml-auto">
        <SecondaryButton color="gray" onClick={() => completeTask(task)}>
          編集
        </SecondaryButton>
        <SecondaryButton color="green" onClick={() => completeTask(task)}>
          完了
        </SecondaryButton>
      </div>
    </div>
  )
}
