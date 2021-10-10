import dayjs from 'dayjs'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'

import type { Duration, PostTask, Task } from 'src/types/index'

import { useTask } from 'src/hooks/useTask'
import { useToast } from 'src/hooks/useToast'
import { formatDate } from 'src/lib/formatDate'
import { userInfo } from 'src/stores'

export const TaskForm: React.VFC = () => {
  const user = useRecoilValue(userInfo)

  const today = dayjs().toDate()

  const [date, setDate] = useState<Duration>(today)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>()

  const { createTask } = useTask()

  const { errorToast } = useToast()
  const onSubmit = async (data: Task) => {
    if (!user) {
      return errorToast('ログインしてください🥺')
    }
    const dateString = date.toString()
    // 日付が二つ選択されていない場合、エラーのToastを表示
    if (!dateString.includes(',')) {
      return errorToast('期間を設定してください🥺')
    }
    const duration = formatDate(date)
    const task: PostTask = {
      duration,
      todo: data.todo,
      createdBy: user.username,
    }
    createTask(task)
    reset()
    setDate(today)
  }

  return (
    <div className="p-4 w-5/12 text-center">
      <h1 className="mb-2 text-3xl">タスクの作成</h1>
      <p className="mb-6">期間とやることを入力して、タスクを作成する！</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Calendar
          onChange={setDate}
          value={date}
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
        {errors.todo && (
          <p className="mb-2 text-red-900 text-sm">
            タスクを入力してください！
          </p>
        )}
        <input type="submit" value="追加" className="btn-secondary" />
      </form>
    </div>
  )
}
