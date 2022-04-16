import axios from "axios"
import { types } from "../types/types"
import getConfig from "../../helpers/getConfig";
import { showAlertScreen } from '../actions/ui';
import { closeCart } from '../actions/cart';

export const startSetPurchases = () => {
    return (dispatch) =>{
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
            .then(res => dispatch(setPurchases(res.data.data.purchases)));
    }
}

export const startPurchaseCart = () => {
    return (dispatch) =>{
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {}, getConfig())
            .then(res => {
                dispatch(showAlertScreen(true))
                dispatch(setPurcahseCart())
            })
            .finally( () => {
                setTimeout(() => {
                    dispatch(showAlertScreen(false))
                    setTimeout(() => {
                        dispatch(closeCart(false))
                    }, 1000);
                }, 3000);
            });
    }
}

const setPurchases = ( purchases ) => ({
    type: types.purchasesList,
    payload: purchases
});

const setPurcahseCart = () => ({
    type: types.purchaseCart
});