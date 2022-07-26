import { createContext, ReactNode, useContext } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ProviderProps = {
  children: ReactNode
}

type SCContext = {
  getItemQty: (id: number) => number
  increaseItemQty: (id: number) => void
  decreaseItemQty: (id: number) => void
  removeFromCart: (id: number) => void
  cartQty: number
  cartItems: CartItem[]
}

type CartItem = {
  id: number
  quantity: number
}

const CartContext = createContext({} as SCContext)

export function useShoppingCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }: ProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    [],
  )

  const cartQty = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  const getItemQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  const increaseItemQty = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseItemQty = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id)
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        getItemQty,
        increaseItemQty,
        decreaseItemQty,
        removeFromCart,
        cartQty,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart/>
    </CartContext.Provider>
  )
}
