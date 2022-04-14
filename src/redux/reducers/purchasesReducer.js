import { types } from "../types/types";

const initialState = {
    purchases: []
}

export const purchasesReducer = ( state = initialState, action) => {
  switch (action.type) {
      case types.purchasesList:
          return{
              ...state,
              purchases: action.payload
          }
  
      default:
          return state;
  }
}