/* eslint-disable react/react-in-jsx-scope */
import { XIcon } from "@heroicons/react/solid";
import { useShoppingCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/currencyConverter";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { For, Show } from "react-haiku";

export function ShoppingCart() {
  const { cartItems, cartQty } = useShoppingCart();

  const cost = cartItems?.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    const totalPrice: number = total + (item?.price || 0) * cartItem.quantity;
    return totalPrice;
  }, 0);

  return (
    <>
      <label htmlFor="my-drawer-4">
        <XIcon className="h-7 w-7 ml-auto" />
      </label>
      <h1 className="text-3xl font-bold">Cart</h1>

      <br />

      <div className="flex flex-col gap-3">
        <For
          each={cartItems}
          render={(item) => <CartItem key={item.id} {...item} />}
        />

        <Show>
          <Show.When isTrue={cartQty > 0}>
            <h3 className="m-auto font-bold text-xl">
              Total: {formatCurrency(cost)}
            </h3>
          </Show.When>

          <Show.Else>
            <h3 className="m-auto font-bold text-xl">Your cart is empty</h3>
          </Show.Else>
        </Show>
      </div>
    </>
  );
}
