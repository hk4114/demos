import React, { FC, useState, useRef } from 'react'
import { useEventListener } from '@/hooks/useEventListener'

const EventListener: FC = () => {
  const [count, setCount] = useState<number>(0)
  const [key, setKey] = useState<string>('')
  const ref = useRef(null)

  useEventListener('click', () => setCount(v => v + 1), ref)
  useEventListener('keydown', ev => setKey(ev.key))

  return (
    <>
      <div>数字：{count}</div>
      <button ref={ref}>加1</button>
      <div>监听键盘事件：{key}</div>
    </>
  )
}

export default EventListener
