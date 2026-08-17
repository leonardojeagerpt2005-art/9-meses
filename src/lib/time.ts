export interface TimeTogether {
  months: number
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

const SECOND_MS = 1000
const MINUTE_MS = 60 * SECOND_MS
const HOUR_MS = 60 * MINUTE_MS
const DAY_MS = 24 * HOUR_MS
const WEEK_MS = 7 * DAY_MS
const MONTH_MS = 30.4375 * DAY_MS

export function getTimeTogether(start: Date, now: Date): TimeTogether {
  const diff = Math.max(0, now.getTime() - start.getTime())

  return {
    months: Math.floor(diff / MONTH_MS),
    weeks: Math.floor(diff / WEEK_MS),
    days: Math.floor(diff / DAY_MS),
    hours: Math.floor(diff / HOUR_MS) % 24,
    minutes: Math.floor(diff / MINUTE_MS) % 60,
    seconds: Math.floor(diff / SECOND_MS) % 60,
    milliseconds: diff % SECOND_MS,
  }
}

export function pad(value: number, length = 2): string {
  return String(value).padStart(length, '0')
}