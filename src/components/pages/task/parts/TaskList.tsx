import { useEffect } from 'react'

import { CompletedTaskList } from './CompletedTaskList'
import { UncompletedTaskList } from './UncompletedTaskList'

import { useSetTask } from 'src/hooks/useSetTask'

export const TaskList: React.VFC = () => {
  const { uncompleted, completed, setUncompleted, setData } = useSetTask()

  useEffect(() => {
    setData()
  }, [])

  // const onDragStart = (result: any) => {
  //   console.log('start')
  // }
  // const onDragUpdate = (result: any) => {
  //   console.log('update')
  //   console.log(result)
  //   console.log(uncompleted)
  // }

  const onDragEnd = async (result: any) => {
    try {
      const targetId = Number(result.draggableId)
      const targetTask = uncompleted.find((tsk) => tsk.id === targetId)!
      const destination = Number(result.destination.index)
      const newUncompleted = [...uncompleted].filter(
        (tsk) => tsk.id !== targetId
      )
      newUncompleted.splice(destination, 0, targetTask)
      setUncompleted(newUncompleted)
    } catch (err) {
      return
    }
  }

  return (
    <div className="flex flex-col gap-6 pt-20 w-6/12">
      <UncompletedTaskList />
      <CompletedTaskList />
    </div>
  )
}
