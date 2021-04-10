import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  cart: [], //{id,title,descr,price,img,qty}
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [
              ...state.cart,
              {
                id: action.payload.id,
                denumire: action.payload.denumire,
                pret: action.payload.pret,
                qty: 1,
              },
            ],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          action.payload.id === item.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default ShopReducer;
