import { useEffect } from 'react'

import { DiscardedTask } from 'src/components/general/task/DiscardedTask'
import { useSetTask } from 'src/hooks/useSetTask'

export const DiscardedTaskList: React.VFC = () => {
  const { discarded, setData } = useSetTask()

  useEffect(() => {
    setData()
  }, [])
  return (
    <div className="mb-8 rounded-lg">
      <h2 className="mb-4 text-center text-red-900 text-xl">
        削除されたタスク
      </h2>
      <ul className="flex flex-col gap-4 mx-auto w-6/12">
        {discarded.map((task) => (
          <DiscardedTask key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
