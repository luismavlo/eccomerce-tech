import axios from "axios"
import { types } from "../types/types"
import getConfig from "../../helpers/getConfig";

export const startSetPurchases = () => {
    return (dispatch) =>{
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
            .then(res => dispatch(setPurchases(res.data.data)));
    }
}


const setPurchases = ( purchases ) => ({
    type: types.purchasesList,
    payload: purchases
})