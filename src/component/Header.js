import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const state = useSelector((state) => state);
  function openCart() {
    console.log(state, "fffffffffffffffffffffffff");
    state.cart.show = true;
  }
  return (
    <div>
      <button
        onClick={() => {
          openCart();
        }}
      >
        cart
      </button>
    </div>
  );
}
