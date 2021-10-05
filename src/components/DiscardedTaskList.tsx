import { DiscardedTask } from 'src/components/general/task/DiscardedTask'
import { useSetTask } from 'src/hooks/useSetTask'

export const DiscardedTaskList: React.VFC = () => {
  const { discarded } = useSetTask()

  return (
    <div className="mb-8 rounded-lg">
      <h2 className="mb-4 text-center text-red-900 text-xl">
        削除されたタスク
      </h2>
      <div className="flex flex-col gap-4 mx-auto w-6/12">
        {discarded.map((task) => (
          <DiscardedTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
