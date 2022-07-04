import React from 'react'
import { Button } from 'antd'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { useGlobalContext } from '../context'
import { ICartItem } from '../module'

const CartItem = ({ id, img, title, price, amount }: ICartItem) => {
  const { increase, decrease, remove } = useGlobalContext()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        {/* remove button */}
        <Button className="remove-btn" onClick={() => remove(id)} type="text">
          remove
        </Button>
      </div>
      <div>
        {/* increase amount */}
        <Button className="amount-btn" onClick={() => increase(id)} type="text">
          <UpOutlined />
        </Button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <Button className="amount-btn" onClick={() => decrease(id)} type="text">
          <DownOutlined />
        </Button>
      </div>
    </article>
  )
}

export default CartItem
