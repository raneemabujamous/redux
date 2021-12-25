import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../action/Action";
export default function Cart(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function Handeldelete(product) {
    dispatch(deleteFromCart(product));
    console.log(state.cart.count, "counnnnnnnnnnnnt");
  }
  return (
    <div>
      <h1>cart</h1>
      <h1>{state.cart.count}</h1>
      {state.cart.cartProducts.map((product) => {
        console.log(product, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

        return (
          <>
            <li>{product}</li>
            <button onClick={() => Handeldelete(product)}>delete</button>
          </>
        );
      })}
    </div>
  );
}
