import { useForm } from 'react-hook-form'

import type { FormValues } from 'src/types'

import { useCalendar } from 'src/hooks/useCalendar'
import { useModal } from 'src/hooks/useModal'
import { useTask } from 'src/hooks/useTask'
import { useToast } from 'src/hooks/useToast'
import { formatDate } from 'src/lib/formatDate'

export const UpdateForm: React.VFC = () => {
  const { modal, onCloseModal } = useModal()

  const { date, resetCalendar, MyCalendar } = useCalendar()
  const { updateTask } = useTask()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()
  const { errorToast } = useToast()

  const onSubmit = (data: FormValues) => {
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

    reset()
    resetCalendar()
    onCloseModal()
  }

  if (!modal.data) {
    return <></>
  } else
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <MyCalendar />
        </div>
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
