import { axiosInstance } from './axiosInstance'

import type { Task } from 'src/types'

export const fetcher = async (): Promise<Array<Task>> => {
  const res = await axiosInstance.get('/')
  const data = await res.data
  return data
}
