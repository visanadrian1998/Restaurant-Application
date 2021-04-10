import * as actionTypes from "./shopping-types";

export const addToCart = (itemID, itemDenumire, itemPret) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
      denumire: itemDenumire,
      pret: itemPret,
    },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const emptyCart = () => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};
