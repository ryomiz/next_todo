import { useRecoilState } from 'recoil'

import {
  completedTaskState,
  discardedTaskState,
  uncompletedTaskState,
} from 'src/stores'
import { Task } from 'src/types'

type ReturnValue = {
  uncompleted: Array<Task>
  completed: Array<Task>
  completeTask: (task: Task) => void
  revertTask: (task: Task) => void
  deleteTask: (task: Task) => void
}

export const useTask = (): ReturnValue => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTaskState)
  const [completed, setCompleted] = useRecoilState(completedTaskState)
  const [discarded, setDiscarded] = useRecoilState(discardedTaskState)

  const completeTask = (task: Task) => {
    const newUncompleted = [...uncompleted].filter(
      (tsk) => tsk.todo !== task.todo
    )
    const newCompleted = [...completed, task]
    setUncompleted(newUncompleted)
    setCompleted(newCompleted)
  }

  const revertTask = (task: Task) => {
    const newUncompleted = [...uncompleted, task]
    const newCompleted = [...completed].filter((tsk) => tsk.todo !== task.todo)
    setUncompleted(newUncompleted)
    setCompleted(newCompleted)
  }

  const deleteTask = (task: Task) => {
    const newCompleted = [...completed].filter((tsk) => tsk.todo !== task.todo)
    const newDiscarded = [...discarded, task]
    setCompleted(newCompleted)
    setDiscarded(newDiscarded)
  }

  return { completeTask, revertTask, deleteTask, uncompleted, completed }
}
