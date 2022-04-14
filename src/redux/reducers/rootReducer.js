import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productsReducer } from "./productsReducer";
import { uiReducer } from "./uiReducer";
import { purchasesReducer } from './purchasesReducer';





export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    products: productsReducer,
    purchases: purchasesReducer
})