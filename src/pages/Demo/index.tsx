import React, { FC } from 'react'
import MockBtn from '@/components/MockBtn'
import {
  Pow,
  Creation,
  CountDown,
  Reaction,
  EventListener,
  LifeCycle
} from './components'
import './index.less'

const Demo: FC = () => {
  return (
    <div className="demo">
      <div className="flex mb8">
        <div className="wrapper mr8">
          <p>usePow 自定义hook</p>
          <Pow />
        </div>
        <div className="wrapper mr8">
          <p>MockBtn 测试useCallback</p>
          <MockBtn />
        </div>
        <div className="wrapper mr8">
          <p>Creation useCreation的使用</p>
          <Creation />
        </div>
        <div className="wrapper">
          <p>CountDown 倒计时的使用</p>
          <CountDown />
        </div>
      </div>
      <div className="flex">
        <div className="wrapper mr8">
          <p>useReactive 双向数据绑定</p>
          <Reaction />
        </div>
        <div className="wrapper mr8">
          <p>事件监听 EventListener</p>
          <EventListener />
        </div>
        <div className="wrapper mr8">
          <p>生命周期 LifeCycle</p>
          <LifeCycle />
        </div>
      </div>
    </div>
  )
}

export default Demo
