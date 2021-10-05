import { atom } from 'recoil'

import type { Task } from 'src/types'

export const uncompletedTaskState = atom<Array<Task>>({
  key: 'uncompletedTaskState',
  default: [
    {
      duration: '10/1 - 10/31',
      todo: 'タスク1',
    },
    {
      duration: '10/1 - 10/31',
      todo: 'タスク2',
    },
  ],
})

export const completedTaskState = atom<Array<Task>>({
  key: 'completedTaskState',
  default: [
    {
      duration: '10/1 - 10/31',
      todo: 'タスク3',
    },
    {
      duration: '10/1 - 10/31',
      todo: 'タスク4',
    },
  ],
})

export const discardedTaskState = atom<Array<Task>>({
  key: 'discardedTaskState',
  default: [
    {
      duration: '10/1 - 10/31',
      todo: 'タスク5',
    },
    {
      duration: '10/1 - 10/31',
      todo: 'タスク6',
    },
  ],
})
