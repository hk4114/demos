import React from 'react'
import './index.less'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      shadow: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export default function Solid() {
  return (
    <div>
      <header>LOGO</header>
      <shadow></shadow>
      <main>
        <p>痛！</p>
        <p>好痛！</p>
        <p>头好痛！</p>
        <p className="ch">
          光怪陆离满是低语的梦境迅速支离破碎，熟睡中的周明瑞只觉脑袋抽痛异常，仿佛被人用棒子狠狠抡了一下，不，更像是遭尖锐的物品刺入太阳穴并伴随有搅动！
        </p>
      </main>
    </div>
  )
}
