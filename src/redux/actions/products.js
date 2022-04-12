import { getConfig } from "@testing-library/react"
import axios from "axios"
import { types } from "../types/types"
import { showAlertScreen } from '../actions/ui';


export const startSetProducts = () => {
    return (dispatch) =>{
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products", getConfig())
             .then(res => dispatch(setProducts(res.data.data)))
    }
}

export const startSetProductDetail = ( id ) =>{
    return (dispatch) =>{
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${ id }`, getConfig())
             .then(res => dispatch(setProductDetail(res.data.data.product)))
    }
}

export const startFilterProductPerName = ( query )=>{
    return ( dispatch )=>{
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${query}`, getConfig())
             .then(res => dispatch(setProducts(res.data.data)))
    }
}

export const startAddProductCart = ( product ) => {
    return dispatch => {
        return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart/', product, getConfig())
            .then( () => dispatch(showAlertScreen(true)))
            .finally( () => {
                setTimeout(() => {
                    dispatch(showAlertScreen(false))
                }, 3000);
            });
    }
}

const setProducts = ( products ) => ({
    type: types.productsList,
    payload: products
})

const setProductDetail = ( product ) =>({
    type: types.productSetDetail,
    payload: product
})