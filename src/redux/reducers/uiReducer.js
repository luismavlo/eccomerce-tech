import { types } from '../types/types';

const initialState = {
    modalOpen: false
}

export const uiReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case types.uiOpenModal:
            return{
                modalOpen: true
            }
        
        case types.uiCloseModal:
            return{
                modalOpen: false
            }
    
        default:
            return state;
    }

}
