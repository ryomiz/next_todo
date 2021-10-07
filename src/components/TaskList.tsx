import { useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { CompletedTask } from 'src/components/general/task/CompletedTask'
import { UncompletedTask } from 'src/components/general/task/UncompletedTask'
import { useSetTask } from 'src/hooks/useSetTask'

export const TaskList: React.VFC = () => {
  const {
    uncompleted,
    completed,
    discarded,
    setUncompleted,
    setCompleted,
    setData,
  } = useSetTask()
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
      <div className="mb-8 rounded-lg">
        <h2 className="mb-4 text-blue-600 text-xl">未完了のタスク</h2>
        <DragDropContext
          // onDragStart={onDragStart}
          // onDragUpdate={onDragUpdate}
          onDragEnd={() => onDragEnd(uncompleted, setUncompleted)}
        >
          <Droppable droppableId="uncompleted">
            {(provided) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-col gap-4"
              >
                {uncompleted.map((task, index: number) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <UncompletedTask task={task} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="mb-8 rounded-lg">
        <h2 className="mb-4 text-blue-600 text-xl">未完了のタスク</h2>
        <ul className="flex flex-col gap-4">
          {completed.map((task, index) => (
            <CompletedTask key={index} task={task} />
          ))}
        </ul>
      </div>
      {/* <Droppable droppableId="uncompleted">
            {(provided) => (
              <ul
                className="flex flex-col gap-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {uncompleted.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <UncompletedTask task={task} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
        <div className="rounded-lg">
          <h2 className="mb-4 text-red-600 text-xl">完了したタスク</h2>
          <Droppable droppableId="uncompleted">
            {(provided) => (
              <ul
                className="flex flex-col gap-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {completed.map((task) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={task.id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CompletedTask task={task} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable> */}
    </div>
  )
}
