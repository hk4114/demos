import React, { FC, useState } from 'react'
import { Button } from 'antd'
import Child from '@/components/Child'

const LifeCycle: FC = () => {
  const [flag, setFlag] = useState<boolean>(false)
  return (
    <>
      <Button onClick={() => setFlag(v => !v)}>
        切换 {flag ? 'unmount' : 'mount'}
      </Button>
      {flag && <Child />}
    </>
  )
}

export default LifeCycle
