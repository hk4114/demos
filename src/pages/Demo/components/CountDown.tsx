import React, { FC, useState } from 'react'
import { Button, message } from 'antd'
import { useCountDown } from '@/hooks/useCountDown'

const CountDown: FC = () => {
  const [, formattedRes] = useCountDown({ targetDate: '2022-12-31 24:00:00' })
  const { days, hours, minutes, seconds, milliseconds } = formattedRes
  const [dcount, setDcount] = useState<number>()

  const [countdown] = useCountDown({
    targetDate: dcount,
    onEnd: () => {
      message.success('结束')
    }
  })
  return (
    <>
      <div>
        距离 2022-12-31 24:00:00 还有 {days} 天 {hours} 时 {minutes} 分{' '}
        {seconds} 秒 {milliseconds} 毫秒
      </div>
      <div>
        <p style={{ marginTop: 12 }}>按钮动态变化：</p>
        <Button
          color="primary"
          disabled={countdown !== 0}
          onClick={() => setDcount(Date.now() + 5000)}
        >
          {countdown === 0 ? '开始' : `还有 ${Math.round(countdown / 1000)}s`}
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => setDcount(0)}>
          停止
        </Button>
      </div>
    </>
  )
}

export default CountDown
