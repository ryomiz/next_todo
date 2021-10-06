import { useCallback } from 'react'

import { useSetTask } from './useSetTask'

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

  const createTask = useCallback(async (task: PostTask) => {
    try {
      await axiosInstance.post('/', task)
      setData()
      console.log('タスクの作成成功！')
    } catch (err) {
      console.error(err, 'タスクの送信に失敗しました')
    }
  }, [])

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
    [uncompleted, completed, setUncompleted, setCompleted]
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
    [uncompleted, completed, setUncompleted, setCompleted]
  )

  const deleteTask = useCallback(
    async (task: Task) => {
      const targetId = task.id
      try {
        await axiosInstance.patch(`discard/${targetId}`)

        const newCompleted = [...completed].filter(
          (tsk) => tsk.todo !== task.todo
        )
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
