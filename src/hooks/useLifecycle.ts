import { useEffect, useRef, useState, useCallback } from 'react'

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.()
  }, [])
}

const useUnmount = (fn: () => void) => {
  const ref = useRef(fn)
  ref.current = fn

  useEffect(
    () => () => {
      fn?.()
    },
    []
  )
}

const useUpdate = () => {
  const [, setState] = useState({})
  return useCallback(() => setState({}), [])
}

export { useMount, useUnmount, useUpdate }
