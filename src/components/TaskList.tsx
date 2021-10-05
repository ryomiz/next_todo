import { useRecoilValue } from 'recoil'

import { CompletedTask } from 'src/components/general/task/CompletedTask'
import { UncompletedTask } from 'src/components/general/task/UncompletedTask'
import { completedTaskState, uncompletedTaskState } from 'src/stores'

export const TaskList: React.VFC = () => {
  const uncompleted = useRecoilValue(uncompletedTaskState)
  const completed = useRecoilValue(completedTaskState)
  return (
    <div className="flex flex-col gap-6 pt-20 w-6/12">
      <div className="mb-8 rounded-lg">
        <h2 className="mb-4 text-blue-600 text-xl">未完了のタスク</h2>
        <div className="flex flex-col gap-4">
          {uncompleted.map((task) => (
            <UncompletedTask key={task.todo} task={task} />
          ))}
        </div>
      </div>
      <div className="rounded-lg">
        <h2 className="mb-4 text-red-600 text-xl">完了したタスク</h2>
        <div className="flex flex-col gap-4">
          {completed.map((task) => (
            <CompletedTask key={task.todo} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}
