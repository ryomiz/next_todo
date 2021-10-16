export type UserInfo = {
  username: string
  password: string | undefined
  access_token: string | undefined
}

export type PostTask = {
  duration: string
  todo: string
  createdBy: string
}

export type Task = {
  id: number
  duration: string
  todo: string
  createdBy: string
  createdAt: Date
}

export type Duration = Date | [Date, Date]
