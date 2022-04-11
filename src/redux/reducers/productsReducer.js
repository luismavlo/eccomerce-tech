import { types } from "../types/types";

const initialState = {
    products: [],
    productDetail: {}
}

export const productsReducer = ( state = initialState, action) => {
  switch (action.type) {
      case types.productsList:
          return{
              ...state,
              products: [...action.payload.products]
          }
      case types.productSetDetail:
          return{
              ...state,
              productDetail: action.payload
          }
        
  
      default:
          return state;
  }
}
