import { atom } from 'recoil'

import type { Task, UserInfo } from 'src/types'

export const userInfo = atom<UserInfo | null>({
  key: 'userInfo',
  default: null,
})

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
