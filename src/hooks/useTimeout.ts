import { useEffect } from 'react'
import { useLatest } from './useLatest'

export const useTimeout = (fn: () => void, delay?: number): void => {
  const fnRef = useLatest(fn)
  useEffect(() => {
    if (!delay || delay < 0) return

    const timer = setTimeout(() => {
      fnRef.current()
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay, fnRef])
}

export const useInterval = (
  fn: () => void,
  delay?: number,
  immediate?: boolean
): void => {
  const fnRef = useLatest(fn)
  useEffect(() => {
    if (!delay || delay < 0) return
    if (immediate) fnRef.current()
    const timer = setInterval(() => {
      fnRef.current()
    }, delay)

    return () => {
      clearInterval(timer)
    }
  }, [delay, fnRef, immediate])
}
