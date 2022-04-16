import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productsReducer } from "./productsReducer";
import { uiReducer } from "./uiReducer";
import { purchasesReducer } from './purchasesReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    products: productsReducer,
    purchases: purchasesReducer,
    cart: cartReducer
})