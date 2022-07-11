import React, { useState, useCallback } from 'react'
import { Button, Space } from 'antd'

const TestButton = React.memo((props: any) => {
  console.log('child render!')
  return (
    <Button color="primary" onClick={props.onClick}>
      {props.title}
    </Button>
  )
})

TestButton.displayName = 'TestButton'

const MockBtn: React.FC<any> = () => {
  const [count, setCount] = useState(0)
  const [isCallback, setIsCallback] = useState(false)
  const [show, setShow] = useState(true)

  const add = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {isCallback ? (
          <TestButton title="useCallback点击" onClick={add} />
        ) : (
          <TestButton title="普通点击" onClick={() => setCount(count + 1)} />
        )}
      </div>
      <div style={{ marginTop: 20 }}>count: {count}</div>
      <p>普通点击时，点击设置也刷新了子组件,useCallback则不会</p>
      <Space>
        <Button onClick={() => setShow(!show)}>设置</Button>
        <Button onClick={() => setIsCallback(!isCallback)}>
          切换按钮{JSON.stringify(isCallback)}
        </Button>
      </Space>
    </div>
  )
}

export default MockBtn
