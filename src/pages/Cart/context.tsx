import React, {
  useContext,
  useReducer,
  useEffect,
  createContext,
  ReactNode
} from 'react'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const CartContext = createContext({})

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0
}

interface ICartProvider {
  children: ReactNode
}

const CartProvider = ({ children }: ICartProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increase = (id: string) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id: string) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  const remove = (id: string) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (state.loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <CartContext.Provider
      value={{
        state,
        increase,
        decrease,
        remove,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// make sure use
export const useGlobalContext = (): any => {
  return useContext(CartContext)
}

export { CartContext, CartProvider }
