import { useCallback } from 'react'

import { useSetTask } from './useSetTask'
import { useToast } from './useToast'

import { axiosInstance } from 'src/lib/axiosInstance'
import { PostTask, Task } from 'src/types'

type ReturnValue = {
  uncompleted: Array<Task>
  completed: Array<Task>
  createTask: (task: PostTask) => void
  completeTask: (task: Task) => void
  revertTask: (task: Task) => void
  deleteTask: (task: Task) => void
}

export const useTask = (): ReturnValue => {
  const {
    uncompleted,
    completed,
    discarded,
    setUncompleted,
    setCompleted,
    setDiscarded,
    setData,
  } = useSetTask()

  const { successToast, errorToast } = useToast()

  const createTask = useCallback(
    async (task: PostTask) => {
      try {
        await axiosInstance.post('/', task)
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
      const targetId = task.id
      try {
        await axiosInstance.patch(`complete/${targetId}`)
        const newUncompleted = [...uncompleted].filter(
          (tsk) => tsk.todo !== task.todo
        )
        const newCompleted = [...completed, task]
        setUncompleted(newUncompleted)
        setCompleted(newCompleted)
      } catch (err) {
        console.error(err)
      }
    },
    [completed, setCompleted, setUncompleted, uncompleted]
  )
  const revertTask = useCallback(
    async (task: Task) => {
      const targetId = task.id
      try {
        await axiosInstance.patch(`revert/${targetId}`)

        const newUncompleted = [...uncompleted, task]
        const newCompleted = [...completed].filter(
          (tsk) => tsk.todo !== task.todo
        )
        setUncompleted(newUncompleted)
        setCompleted(newCompleted)
      } catch (err) {
        console.error(err)
      }
    },
    [completed, setCompleted, setUncompleted, uncompleted]
  )

  const discardTask = useCallback(
    async (task: Task) => {
      const targetId = task.id
      try {
        await axiosInstance.patch(`discard/${targetId}`)

        const newCompleted = [...completed].filter((tsk) => tsk.id !== targetId)
        const newDiscarded = [...discarded, task]
        setCompleted(newCompleted)
        setDiscarded(newDiscarded)
      } catch (err) {
        console.error(err)
      }
    },
    [completed, discarded, setCompleted, setDiscarded]
  )

  return {
    createTask,
    completeTask,
    revertTask,
    deleteTask,
    uncompleted,
    completed,
  }
}
