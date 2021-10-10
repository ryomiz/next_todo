import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { CompletedTask } from 'src/components/general/task/CompletedTask'
import { useSetTask } from 'src/hooks/useSetTask'

export const CompletedTaskList: React.VFC = () => {
  const { completed, setUncompleted } = useSetTask()

  const onDragEnd = async (result: any) => {
    try {
      const targetId = Number(result.draggableId)
      const targetTask = completed.find((tsk) => tsk.id === targetId)!
      const destination = Number(result.destination.index)
      const newUncompleted = [...completed].filter((tsk) => tsk.id !== targetId)
      newUncompleted.splice(destination, 0, targetTask)
      setUncompleted(newUncompleted)
    } catch (err) {
      return
    }
  }

  return (
    <div className="mb-8 rounded-lg">
      <h2 className="mb-4 text-red-600 text-xl">完了したタスク</h2>
      <DragDropContext onDragEnd={() => onDragEnd('')}>
        <Droppable droppableId="uncompleted">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-col gap-4"
            >
              {completed.map((task, index: number) => (
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
                      <CompletedTask task={task} />
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
  )
}
