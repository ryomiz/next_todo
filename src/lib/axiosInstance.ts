import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const axiosInstance = axios.create({
  baseURL: API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})
