import dayjs from 'dayjs'
import { memo, useState } from 'react'
import Calendar from 'react-calendar'

import type { Duration } from 'src/types'

type ReturnValue = {
  date: Duration
  resetCalendar: () => void
  MyCalendar: React.VFC
}

const today = dayjs().toDate()

export const useCalendar = (): ReturnValue => {
  const [date, setDate] = useState<Duration>(today)

  const resetCalendar = () => setDate(today)

  const MyCalendar = memo(() => {
    return (
      <Calendar
        onChange={setDate}
        value={date}
        calendarType="US"
        selectRange={true}
        className="mt-8 mx-auto"
      />
    )
  })

  MyCalendar.displayName = 'MyCalendar'

  return { date, resetCalendar, MyCalendar }
}
