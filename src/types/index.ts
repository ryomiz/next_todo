export type UserInfo = {
  username: string
  password: string
  access_token?: string
}

export type PostTask = {
  duration: string
  todo: string
  state: 'uncompleted'
}

export type Task = {
  id: number
  duration: string
  todo: string
  state: 'uncompleted' | 'completed' | 'discarded'
}

export type Duration = Date | [Date, Date]
