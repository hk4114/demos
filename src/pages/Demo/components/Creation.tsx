import React, { FC } from 'react'
import { useCreation } from '@/hooks/useCreation'

const Creation: FC = () => {
  const getNowData = () => Math.random()
  const nowData = useCreation(() => getNowData(), [])
  return (
    <>
      <p>useCreation 是 useMemo 或 useRef 的替代品。</p>
      <p>
        React useMemo
        可能会选择“忘记”一些以前记忆的值，并在下一次渲染时重新计算它们，例如为屏幕外组件释放内存。
      </p>
      <p>相比 useRef，用 useCreation 创建常量不容易出现性能隐患。</p>
      <div>正常的函数： {getNowData()}</div>
      <div>useCreation包裹后的 {nowData}</div>
    </>
  )
}

export default Creation
