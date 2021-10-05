import axios from 'axios'

import type { Task } from 'src/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const fetcher = async (): Promise<Array<Task>> => {
  const res = await axios.get(API_URL)
  const data = await res.data
  return data
}
