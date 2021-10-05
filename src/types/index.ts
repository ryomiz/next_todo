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
