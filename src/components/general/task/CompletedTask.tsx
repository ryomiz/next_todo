import { SecondaryButton } from 'src/components/general/button/SecondaryButton'
import { useTask } from 'src/hooks/useTask'
import { Task } from 'src/types'

type Props = {
  task: Task
}

export const CompletedTask: React.VFC<Props> = (props) => {
  const { task } = props
  const { duration, todo } = task
  const { revertTask, discardTask } = useTask()
  return (
    <div className="flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <p className="order-2">{todo}</p>
      <div className="flex gap-2 order-3 ml-auto">
        <SecondaryButton color="indigo" onClick={() => revertTask(task)}>
          戻す
        </SecondaryButton>
        <SecondaryButton color="red" onClick={() => discardTask(task)}>
          削除
        </SecondaryButton>
      </div>
    </div>
  )
}
