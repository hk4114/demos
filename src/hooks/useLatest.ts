import { useRef } from 'react'

// 拿到最新值
export const useLatest = <T>(value: T) => {
  const ref = useRef(value)
  ref.current = value
  return ref
}
