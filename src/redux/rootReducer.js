import { combineReducers } from "redux";

import ShopReducer from "./Shopping/shopping-reducer";

const rootReducer = combineReducers({
  shop: ShopReducer,
});

export default rootReducer;
