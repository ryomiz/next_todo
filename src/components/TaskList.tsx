import { CompletedTask } from 'src/components/CompletedTask'
import { UncompletedTask } from 'src/components/UncompletedTask'

export const TaskList: React.VFC = () => {
  return (
    <div className="flex flex-col gap-6 pt-20 w-6/12">
      <div className="mb-8 rounded-lg">
        <h2 className="mb-4 text-blue-600 text-xl">未完了のタスク</h2>
        <div className="flex flex-col gap-4">
          <UncompletedTask duration="10/1-10/31" task="タスク1" />
          <UncompletedTask duration="10/1-10/31" task="タスク1" />
        </div>
      </div>
      <div className="rounded-lg">
        <h2 className="mb-4 text-red-600 text-xl">完了したタスク</h2>
        <div className="flex flex-col gap-4">
          <CompletedTask duration="10/1-10/31" task="タスク1" />
          <CompletedTask duration="10/1-10/31" task="タスク2" />
        </div>
      </div>
    </div>
  )
}
