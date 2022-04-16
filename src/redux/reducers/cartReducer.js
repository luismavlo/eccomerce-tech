import { types } from "../types/types";

const initialState = {
    cartOpen: false,
    cartList: {}
}

export const cartReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.cartOpen:
            return{
                ...state,
                cartOpen: action.payload
            }
        case types.cartClose:
            return{
                ...state,
                cartOpen: action.payload
            }
        case types.cartList:
            return {
                ...state,
                cartList: action.payload
            }
  
      default:
          return state;
  }
}