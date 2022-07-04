import React, { FC } from 'react'
import './index.less'
import { CartProvider } from './context'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

const Cart: FC = () => {
  return (
    <CartProvider>
      <Navbar />
      <CartContainer />
    </CartProvider>
  )
}

export default Cart
