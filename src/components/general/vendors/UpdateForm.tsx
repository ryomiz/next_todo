import dayjs from 'dayjs'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { useForm } from 'react-hook-form'

import type { Duration, PostTask } from 'src/types'

import { useModal } from 'src/hooks/useModal'
import { useTask } from 'src/hooks/useTask'
import { useToast } from 'src/hooks/useToast'
import { formatDate } from 'src/lib/formatDate'

export const UpdateForm: React.VFC = () => {
  const { modal, onCloseModal } = useModal()

  const today = dayjs().toDate()
  const [date, setDate] = useState<Duration>(today)

  const { updateTask } = useTask()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostTask>()
  const { errorToast } = useToast()

  const onSubmit = (data: PostTask) => {
    // 日付が二つ選択されていない場合、エラーのToastを表示
    if (date instanceof Date) {
      return errorToast('期間を設定してください🥺')
    }
    const format = formatDate(date)

    if (modal.data) {
      const task = {
        ...modal.data,
        todo: data.todo,
        duration: format,
      }

      updateTask(task)
    }

    onCloseModal()
    reset()
    setDate(today)
  }

  if (!modal.data) {
    return <></>
  } else
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Calendar
          onChange={setDate}
          value={date}
          calendarType="US"
          selectRange={true}
          className="mb-4 mt-8 mx-auto"
        />
        <div className="flex gap-2 items-center mb-4">
          <input
            type="text"
            placeholder="タスクを入力！"
            defaultValue={modal.data.todo}
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
    )
}
