import { SetterOrUpdater, useRecoilState } from 'recoil'

import type { Task } from 'src/types'

import { fetcher } from 'src/lib/fetcher'
import {
  completedTaskState,
  discardedTaskState,
  uncompletedTaskState,
} from 'src/stores'

type ReturnValue = {
  uncompleted: Array<Task>
  completed: Array<Task>
  discarded: Array<Task>
  setUncompleted: SetterOrUpdater<Task[]>
  setCompleted: SetterOrUpdater<Task[]>
  setDiscarded: SetterOrUpdater<Task[]>
  setData(): Promise<void>
}

export const useSetTask = (): ReturnValue => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTaskState)
  const [completed, setCompleted] = useRecoilState(completedTaskState)
  const [discarded, setDiscarded] = useRecoilState(discardedTaskState)
  const setData = async () => {
    try {
      const data = await fetcher()
      // 未完了のタスクの設定
      const newUncompleted = data.filter(
        (item: Task) => item.state === 'uncompleted'
      )
      setUncompleted(newUncompleted)
      // 完了したタスクの設定
      const newCompleted = data.filter(
        (item: Task) => item.state === 'completed'
      )
      setCompleted(newCompleted)
      // 削除されたタスクの設定
      const newDiscarded = data.filter(
        (item: Task) => item.state === 'discarded'
      )
      setDiscarded(newDiscarded)
    } catch (err) {
      console.error(err, 'データの取得に失敗しました')
      setUncompleted([])
      setCompleted([])
      setDiscarded([])
    }
  }

  return {
    uncompleted,
    completed,
    discarded,
    setUncompleted,
    setCompleted,
    setDiscarded,
    setData,
  }
}
