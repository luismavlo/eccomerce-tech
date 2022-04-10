import { types } from '../types/types';

const initialState = {
    modalOpen: false,
    typeLog: false
}

export const uiReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case types.uiOpenModal:
            return{
                ...state,
                modalOpen: true
            }
        
        case types.uiCloseModal:
            return{
                ...state,
                modalOpen: false
            }
        
        case types.uiShowFormLogin:
            return{
                ...state,
                typeLog: false
            }
        
        case types.uiShowFormRegister:
            return{
                ...state,
                typeLog: true
            }
    
        default:
            return state;
    }

}
