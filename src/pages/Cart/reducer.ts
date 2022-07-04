import { IAction, ICartItem } from './module'

const reducer = (state: any, action: IAction) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem: ICartItem) => {
        if (cartItem.id === action.payload) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      .filter((cartItem: ICartItem) => cartItem.amount !== 0)

    return { ...state, cart: tempCart }
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem: ICartItem) => {
      if (cartItem.id === action.payload) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter(
        (cartItem: ICartItem) => cartItem.id !== action.payload
      )
    }
  }
  if (action.type === 'GET_TOTALS') {
    console.log()
    let { total, amount } = state.cart.reduce(
      (cartTotal: any, cartItem: ICartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount

        return cartTotal
      },
      {
        total: 0,
        amount: 0
      }
    )
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload }
  }
}

export default reducer
