import { atom } from 'recoil'

import type { Task } from 'src/types'

export const uncompletedTaskState = atom<Array<Task>>({
  key: 'uncompletedTaskState',
  default: [],
})

export const completedTaskState = atom<Array<Task>>({
  key: 'completedTaskState',
  default: [],
})

export const discardedTaskState = atom<Array<Task>>({
  key: 'discardedTaskState',
  default: [],
})
