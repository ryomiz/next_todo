import { SetterOrUpdater, useRecoilState } from 'recoil'

import type { Task } from 'src/types'

import { axiosInstance } from 'src/lib/axiosInstance'
import {
  completedTaskState,
  discardedTaskState,
  uncompletedTaskState,
} from 'src/stores'

type ReturnValue = {
  uncompleted: Array<Task>
  completed: Array<Task>
  discarded: Array<Task>
  setUncompleted: SetterOrUpdater<Array<Task>>
  setCompleted: SetterOrUpdater<Array<Task>>
  setDiscarded: SetterOrUpdater<Array<Task>>
  setData(): Promise<void>
}

export const useSetTask = (): ReturnValue => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTaskState)
  const [completed, setCompleted] = useRecoilState(completedTaskState)
  const [discarded, setDiscarded] = useRecoilState(discardedTaskState)
  const setData = async () => {
    try {
      // uncompletedの設定
      const newUncompleted = await axiosInstance
        .get<Array<Task>>('v1/uncompleted')
        .then((res) => res.data)

      // completedの設定
      const newCompleted = await axiosInstance
        .get<Array<Task>>('v1/completed')
        .then((res) => res.data)

      // discardedの設定
      const newDiscarded = await axiosInstance
        .get<Array<Task>>('v1/discarded')
        .then((res) => res.data)

      await Promise.all([
        setUncompleted(newUncompleted),
        setCompleted(newCompleted),
        setDiscarded(newDiscarded),
      ])
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
