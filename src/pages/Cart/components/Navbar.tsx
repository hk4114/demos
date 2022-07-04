import React from 'react'
import { ShoppingOutlined } from '@ant-design/icons'
import { useGlobalContext } from '../context'
const Navbar = () => {
  const {
    state: { amount }
  } = useGlobalContext()
  return (
    <nav>
      <div className="nav-center">
        <h3>Cart</h3>
        <div className="nav-container">
          <ShoppingOutlined style={{ fontSize: '54px' }} />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
