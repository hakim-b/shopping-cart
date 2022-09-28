import { useShoppingCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/currencyConverter";
import React from "react";
import { Show } from "react-haiku";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgURL: string;
};

export function StoreItem({ id, name, price, imgURL }: StoreItemProps) {
  const { getItemQty, increaseItemQty, decreaseItemQty, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQty(id);

  const QtyCounter = () => {
    return (
      <>
        <div className="flex flex-col gap-6">
          <div>
            <button
              className="btn btn-info"
              onClick={() => decreaseItemQty(id)}
            >
              -
            </button>
            {quantity} in cart
            <button
              className="btn btn-info"
              onClick={() => {
                increaseItemQty(id);
              }}
            >
              +
            </button>
          </div>
          <button className="btn btn-error" onClick={() => removeFromCart(id)}>
            Remove
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="card w-96 h-auto bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={imgURL}
          alt={name}
          className="rounded-xl object-fill w-96 h-96"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{formatCurrency(price)}</p>
        <div className="card-actions">
          <Show>
            <Show.When isTrue={quantity === 0}>
              <button
                className="btn btn-info"
                onClick={() => increaseItemQty(id)}
              >
                Add to cart
              </button>
            </Show.When>
            <Show.Else>
              <QtyCounter />
            </Show.Else>
          </Show>
        </div>
      </div>
    </div>
  );
}
