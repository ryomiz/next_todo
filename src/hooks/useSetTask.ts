import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

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
}

export const useSetTask = (): ReturnValue => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTaskState)
  const [completed, setCompleted] = useRecoilState(completedTaskState)
  const [discarded, setDiscarded] = useRecoilState(discardedTaskState)
  useEffect(() => {
    const setData = async () => {
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
    }
    setData()
  }, [setCompleted, setDiscarded, setUncompleted])

  return { uncompleted, completed, discarded }
}
