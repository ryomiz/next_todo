import dayjs from 'dayjs'

import { Duration } from 'src/types'

export const formatDate = (duration: Duration): string => {
  const formattedDate = duration
    .map((date) => dayjs(date).format('MM-DD'))
    .join(' ')
    .replace(/-/g, '/')
    .replace(' ', '-')
  return formattedDate
}
