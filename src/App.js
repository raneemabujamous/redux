import React from "react";
import Category from "./component/Category";
import Products from "./component/Products";
import Cart from "./component/Cart";
import Header from "./component/Header";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);

  return (
    <>
      <Header />
      <Category />
      {state.cart.show && <Cart />}

      <Products />
    </>
  );
}
export default App;
