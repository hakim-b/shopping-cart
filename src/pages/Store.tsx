import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import React from "react";
import { For } from "react-haiku";

export function Store() {
  return (
    <>
      <h1 className="text-4xl font-bold">Store</h1>

      <br />

      <div className="grid place-items-center gap-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        <For
          each={storeItems}
          render={(item) => (
            <StoreItem
              id={item.id}
              name={item.name}
              price={item.price}
              imgURL={item.imgUrl}
            />
          )}
        />
      </div>
    </>
  );
}
