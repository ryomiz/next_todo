import { useCallback } from 'react'

import { useAuth } from './useAuth'
import { useModal } from './useModal'
import { useTask } from './useTask'
import { useToast } from './useToast'

import type { UseFormReset } from 'react-hook-form'
import type { Duration, FormValues, PostTask, Task } from 'src/types'

import { formatDate } from 'src/lib/formatDate'

type ReturnValue = {
  handleCreate: (
    data: FormValues,
    date: Duration,
    resetCalendar: () => void
  ) => void
  handleUpdate: (
    data: FormValues,
    date: Duration,
    resetCalendar: () => void
  ) => void
}

export const useSubmitHandler = (
  reset: UseFormReset<FormValues>
): ReturnValue => {
  const { user } = useAuth()
  const { createTask, updateTask } = useTask()
  const { modal, onCloseModal } = useModal()
  const { errorToast } = useToast()

  const handleCreate = useCallback(
    (data: FormValues, date: Duration, resetCalendar: () => void) => {
      // ログインしていない場合、エラーのToastを表示
      // Createのみこの部分でログインの有無を検証する
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
    },
    [createTask, errorToast, reset, user]
  )

  const handleUpdate = useCallback(
    (data: FormValues, date: Duration, resetCalendar: () => void) => {
      // 日付が二つ選択されていない場合、エラーのToastを表示
      if (date instanceof Date) {
        return errorToast('期間を設定してください🥺')
      }
      const format = formatDate(date)
      if (modal.data) {
        const task: Task = {
          ...modal.data,
          todo: data.todo,
          duration: format,
        }

        updateTask(task)
      }
      // カレンダー、Todoのフォームをリセットする
      reset()
      resetCalendar()
      // モーダルを閉じる
      onCloseModal()
    },
    [errorToast, modal.data, onCloseModal, reset, updateTask]
  )

  return { handleCreate, handleUpdate }
}
