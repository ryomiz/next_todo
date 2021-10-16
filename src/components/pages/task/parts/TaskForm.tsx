import { memo } from 'react'
import { useForm } from 'react-hook-form'

import type { FormValues, PostTask } from 'src/types/index'

import { useAuth } from 'src/hooks/useAuth'
import { useCalendar } from 'src/hooks/useCalendar'
import { useTask } from 'src/hooks/useTask'
import { useToast } from 'src/hooks/useToast'
import { formatDate } from 'src/lib/formatDate'

export const TaskForm: React.VFC = memo(() => {
  const { date, resetCalendar, MyCalendar } = useCalendar()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const { user } = useAuth()
  const { createTask } = useTask()
  const { errorToast } = useToast()

  const onSubmit = (data: FormValues) => {
    if (!user) {
      return errorToast('ログインしてください🥺')
    }
    // 日付が二つ選択されていない場合、エラーのToastを表示
    if (date instanceof Date) {
      return errorToast('期間を設定してください🥺')
    }

    // 選択したデータをフォーマットする
    const duration = formatDate(date)
    const task: PostTask = {
      duration,
      todo: data.todo,
      createdBy: user.username,
    }
    createTask(task)

    // カレンダー、Todoのフォームをリセットする
    reset()
    resetCalendar()
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
