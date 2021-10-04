import { useState } from 'react'
import Calendar from 'react-calendar'
import { useForm } from 'react-hook-form'

import type { Todo } from 'src/types/index'

export const TaskForm: React.VFC = () => {
  const [value, onChange] = useState(new Date())
  const { register, handleSubmit } = useForm<Todo>()

  const onSubmit = (data: Todo) => console.log(data)
  return (
    <div className="p-4 w-5/12 text-center">
      <h1 className="mb-2 text-3xl">タスクの作成</h1>
      <p className="mb-6">期間とやることを入力して、タスクを作成する！</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Calendar
          onChange={onChange}
          value={value}
          calendarType="US"
          selectRange={true}
          className="mb-4 mx-auto"
        />
        <input
          type="text"
          placeholder="タスクを入力！"
          {...register('todo', {
            required: true,
          })}
          className="mb-4 px-6 py-2 w-10/12 bg-gray-100 rounded-lg"
        />
        <br />
        <input type="submit" value="追加" className="btn-secondary" />
      </form>
    </div>
  )
}
