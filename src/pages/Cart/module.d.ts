export interface ICartItem {
  id: string
  img: string
  title: string
  price: number
  amount: number
}

export interface IAction {
  type:
    | 'CLEAR_CART'
    | 'DECREASE'
    | 'INCREASE'
    | 'REMOVE'
    | 'GET_TOTALS'
    | 'LOADING'
    | 'DISPLAY_ITEMS'
  payload?: string | ICartItem[]
}
