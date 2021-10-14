import axios, { AxiosInstance } from 'axios'

import { UserInfo } from 'src/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const axiosInstance = (user?: UserInfo): AxiosInstance => {
  const token = user?.access_token ?? undefined

  const instance = axios.create({
    baseURL: API_URL || 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    timeout: 5000,
  })
  return instance
}
