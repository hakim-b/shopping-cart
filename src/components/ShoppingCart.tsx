import { XIcon } from '@heroicons/react/solid'
import { useShoppingCart } from '../context/CartContext'
import { formatCurrency } from '../utilities/currencyConverter'
import { CartItem } from './CartItem'
import storeItems from '../data/items.json'

export function ShoppingCart() {
  const { cartItems } = useShoppingCart()

  const cost = cartItems?.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id)
    let totalPrice = total + (item?.price || 0) * cartItem.quantity
    return totalPrice
  }, 0)

  return (
    <>
      <label htmlFor="my-drawer-4">
        <XIcon className="h-7 w-7 ml-auto" />
      </label>
      <h1 className="text-3xl font-bold">Cart</h1>

      <div className="flex flex-col gap-3">
        {cartItems?.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        <h3 className="m-auto font-bold text-xl">
          Total: {formatCurrency(cost)}
        </h3>
      </div>
    </>
  )
}
