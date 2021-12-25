export function selectCategory(categorayName) {
  return {
    type: "SELECT_CATEGORY",
    payload: categorayName,
  };
}

export function filterProducts(categorayName, allProducts) {
  console.log("categorayName", "allProducts", categorayName, allProducts);
  return {
    type: "FILTER_PRODUCTS",
    payload: { categorayName, allProducts },
  };
}
export function addToCart(productName) {
  return {
    type: "ADD_TO_CART",
    payload: productName,
  };
}
export function deleteFromCart(productName) {
  return {
    type: "DELETE_FROM_CART",
    payload: productName,
  };
}

// const redux = require("redux");
// const createStore = redux.createStore;
// const BUY_CAKE = "BUY_CAKE";
// const BUY_ICECREAM = "BUY_ICECREAM";

// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: "First redux action ",
//   };
// }
// function buyIce() {
//   return {
//     type: BUY_ICECREAM,
//     info: "First redux action ",
//   };
// }
// /////reducer
// const initialState = {
//   numOfCake: 10,
//   numOfIce: 20,
// };
// const reducer = (state = initialState, action) => {
//   console.log(state);
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCake: state.numOfCake - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIce: state.numOfIce - 1,
//       };
//     default:
//       return state;
//   }
// };
// ///// store
// const store = createStore(reducer);
// console.log("initial state", store.getState());
// store.subscribe(() => {
//   console.log("updated", store.getState());
// });
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIce());
// // unsubscribe();
