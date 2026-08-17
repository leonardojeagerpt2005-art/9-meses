import { useEffect, useState } from 'react'
import { getTimeTogether, type TimeTogether } from '../lib/time'
import { START_DATE } from '../data/config'

export function useTimeTogether(intervalMs = 16): TimeTogether {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return getTimeTogether(START_DATE, now)
}