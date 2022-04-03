import { types } from '../types/types';

const initialState = {
    name: ''
}

export const authReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case types.authLogin:
            return{
                ...state
            }
    
        default:
            return state;
    }

}
