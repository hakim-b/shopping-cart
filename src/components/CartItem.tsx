import { useShoppingCart } from '../context/CartContext'
import storeItems from '../data/items.json'
import { formatCurrency } from '../utilities/currencyConverter'

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id == id)

  if (item == null) {
    return null
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <img
        src={item.imgUrl}
        alt="the added item"
        className="w-32 h-20 object-cover"
      />

      <div className="m-auto">
        <div>
          {item.name}{' '}
          {quantity > 1 && <span className="text-xs">x{quantity}</span>}
        </div>
        <div className="text-xs">{formatCurrency(item.price)}</div>
      </div>

      <div>{formatCurrency(item.price * quantity)}</div>
      <button
        className="btn btn-sm btn-outline btn-error"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </button>
    </div>
  )
}
