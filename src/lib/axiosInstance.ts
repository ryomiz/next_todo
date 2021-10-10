import axios, { AxiosInstance } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const axiosInstance = (token?: string): AxiosInstance =>
  axios.create({
    baseURL: API_URL || 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    timeout: 5000,
  })
