import { memo } from 'react'
import { useForm } from 'react-hook-form'

import type { FormValues } from 'src/types'

import { useCalendar } from 'src/hooks/useCalendar'
import { useModal } from 'src/hooks/useModal'
import { useSubmitHandler } from 'src/hooks/useSubmitHandler'

export const UpdateForm: React.VFC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()
  const { date, MyCalendar } = useCalendar()
  const { handleUpdate } = useSubmitHandler(reset)

  const { modal } = useModal()

  const onSubmit = (data: FormValues) => {
    handleUpdate(data, date)
  }

  // モーダルの中身がからの場合、nullをreturn
  if (!modal.data) {
    return null
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
})

UpdateForm.displayName = 'UpdateForm'
