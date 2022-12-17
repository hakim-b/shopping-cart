/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from "react-router-dom";

export function Home(): JSX.Element {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This is my shopping cart
          </p>
          <NavLink className="btn btn-primary" to={"/store"}>Get Started</NavLink>
        </div>
      </div>
    </div>
  );
}
