/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { ThemeDropdown } from "./ThemeDropdown";
import { useShoppingCart } from "../context/CartContext";
import { If } from "react-haiku";

export function Navbar() {
  const { cartQty } = useShoppingCart();

  return (
    <div className="navbar bg-base-100 shadow-md sticky">
      <div className="navbar-start">
        <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">
          Home
        </NavLink>
        <NavLink to={"/store"} className="btn btn-ghost normal-case text-xl">
          Store
        </NavLink>
      </div>

      <div className="navbar-end gap-5">
        <ThemeDropdown />
        <If isTrue={cartQty > 0}>
          <label
            htmlFor="my-drawer-4"
            className="btn btn-outline btn-primary btn-circle relative"
          >
            <div className="indicator">
              <ShoppingCartIcon className="h-6 w-6 mr-0" />
              <span className="badge badge-sm indicator-item">{cartQty}</span>
            </div>
          </label>
        </If>
      </div>
    </div>
  );
}
