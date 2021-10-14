import dayjs from 'dayjs'

export const formatDate = (duration: [Date, Date]): string => {
  const formattedDate = duration
    .map((date) => dayjs(date).format('MM-DD'))
    .join(' ')
    .replace(/-/g, '/')
    .replace(' ', '-')
  return formattedDate
}
