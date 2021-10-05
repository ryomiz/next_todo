import { NextPage } from 'next'
import { useRecoilValue } from 'recoil'

import { DiscardedTask } from 'src/components/general/task/DiscardedTask'
import { Layout } from 'src/components/layout/Layout'
import { discardedTaskState } from 'src/stores'

const TrashPage: NextPage = () => {
  const discarded = useRecoilValue(discardedTaskState)
  return (
    <Layout>
      <div className="mb-8 rounded-lg">
        <h2 className="mb-4 text-center text-red-900 text-xl">
          削除されたタスク
        </h2>
        <div className="flex flex-col gap-4 mx-auto w-6/12">
          {discarded.map((task, idx: number) => (
            <DiscardedTask key={idx} task={task} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default TrashPage
