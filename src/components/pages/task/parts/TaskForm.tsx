import { memo } from 'react'
import { useForm } from 'react-hook-form'

import type { FormValues } from 'src/types/index'

import { useCalendar } from 'src/hooks/useCalendar'
import { useSubmitHandler } from 'src/hooks/useSubmitHandler'

export const TaskForm: React.VFC = memo(() => {
  const { date, resetCalendar, MyCalendar } = useCalendar()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const { handleCreate } = useSubmitHandler(reset)

  const onSubmit = (data: FormValues) => {
    handleCreate(data, date, resetCalendar)
  }

  return (
    <div className="p-4 w-5/12 text-center">
      <h1 className="mb-2 text-3xl">タスクの作成</h1>
      <p className="mb-6">期間とやることを入力して、タスクを作成する！</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <MyCalendar />
        </div>
        <div className="flex gap-2 items-center mb-4 px-6">
          <input
            type="text"
            placeholder="タスクを入力！"
            {...register('todo', {
              required: true,
            })}
            className="px-3 py-1 w-10/12 bg-gray-100 rounded-lg"
          />
          <input type="submit" value="追加" className="btn-secondary" />
        </div>
        {errors.todo && (
          <p className="mb-2 text-center text-red-900 text-sm">
            タスクを入力してください！
          </p>
        )}
      </form>
    </div>
  )
})

TaskForm.displayName = 'TaskForm'
