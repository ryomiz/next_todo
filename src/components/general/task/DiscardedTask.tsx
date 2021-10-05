import { Task } from 'src/types'

type Props = {
  task: Task
}

export const DiscardedTask: React.VFC<Props> = (props) => {
  const { task } = props
  const { duration, todo } = task
  return (
    <div className="flex items-center p-4 rounded-lg shadow">
      <span className="w-32">{duration}</span>
      <p className="order-2">{todo}</p>
    </div>
  )
}
