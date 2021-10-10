import { useCallback } from 'react'

import { useSetTask } from './useSetTask'
import { useToast } from './useToast'

import { axiosInstance } from 'src/lib/axiosInstance'
import { PostTask, Task } from 'src/types'

type ReturnValue = {
  createTask: (task: PostTask) => void
  completeTask: (task: Task) => void
  revertTask: (task: Task) => void
  discardTask: (task: Task) => void
  deleteTask: (task: Task) => void
}

export const useTask = (): ReturnValue => {
  const { uncompleted, completed, setData } = useSetTask()

  const { successToast, errorToast } = useToast()

  const createTask = useCallback(
    async (task: PostTask) => {
      try {
        await axiosInstance.post('/v1/uncompleted', task)
        successToast('タスクの作成に成功しました🚀')
        setData()
      } catch (err) {
        errorToast('タスクの作成に失敗しました🥺')
      }
    },
    [errorToast, setData, successToast]
  )

  const completeTask = useCallback(
    async (task: Task) => {
      try {
        const targetId = task.id
        const { duration, todo, createdBy } = task
        // uncompletedから削除
        await axiosInstance.delete(`/v1/uncompleted/${targetId}`)
        // completedに追加
        await axiosInstance.post('/v1/completed', {
          duration,
          todo,
          createdBy,
        })
        await setData()
      } catch (err) {
        errorToast('エラーが発生しました🥺')
      }
    },
    [errorToast, setData]
  )
  const revertTask = useCallback(
    async (task: Task) => {
      try {
        const targetId = task.id
        const { duration, todo, createdBy } = task
        // completedから削除
        await axiosInstance.delete(`/v1/completed/${targetId}`)
        // uncompletedに追加
        await axiosInstance.post('/v1/uncompleted', {
          duration,
          todo,
          createdBy,
        })
        await setData()
      } catch (err) {
        errorToast('エラーが発生しました🥺')
      }
    },
    [errorToast, setData]
  )

  const discardTask = useCallback(
    async (task: Task) => {
      try {
        const targetId = task.id
        const { duration, todo, createdBy } = task
        // completedから削除
        await axiosInstance.delete(`/v1/completed/${targetId}`)
        // discardedに追加
        await axiosInstance.post('/v1/discarded', {
          duration,
          todo,
          createdBy,
        })
        await setData()
      } catch (err) {
        errorToast('エラーが発生しました🥺')
      }
    },
    [errorToast, setData]
  )

  const deleteTask = useCallback(
    async (task: Task) => {
      try {
        const targetId = task.id
        await axiosInstance.delete(`/v1/discarded/${targetId}`)
        successToast('削除に成功しました！🗑')
        await setData()
      } catch (err) {
        errorToast('エラーが発生しました🥺')
      }
    },
    [errorToast, setData, successToast]
  )

  return {
    createTask,
    completeTask,
    revertTask,
    discardTask,
    deleteTask,
  }
}
