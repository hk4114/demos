import { message, Button } from 'antd'
import React from 'react'
import { useMount, useUnmount, useUpdate } from '@/hooks/useLifecycle'

const Child: React.FC<any> = () => {
  const update = useUpdate()

  useMount(() => {
    message.success('首次渲染')
  })

  useUnmount(() => {
    message.success('组件已卸载')
  })

  return (
    <div style={{ padding: 50 }}>
      <div>时间：{Date.now()}</div>
      <Button onClick={update}>更新时间</Button>
    </div>
  )
}

export default Child
