import { types } from "../types/types";
import getConfig from '../../helpers/getConfig';
import axios from 'axios';

export const startSetCart = () => {
    return (dispatch) =>{
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
            .then(res => dispatch(setCart(res.data.data.cart)));
    }
}

export const startUpdateQuantity = (id, newQuantity) => { 
    return (dispatch) =>{
        axios.patch('https://ecommerce-api-react.herokuapp.com/api/v1/cart', { "id": id, "newQuantity": newQuantity }, getConfig())
            .then(res => {
                dispatch(updateProductCart());
                axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
                    .then(res => dispatch(setCart(res.data.data.cart)))
            });
    }
}

export const startDeleteProductCart = (id) => {
    return (dispatch) =>{
        axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
            .then(res => {
                dispatch(deleteProductCart())
                axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
                    .then(res => dispatch(setCart(res.data.data.cart)))

            });
    }
}

export const showCartOpen = (isOpenCart) => ({
    type: types.cartOpen,
    payload: isOpenCart
})

export const deleteProductCart = () => ({
    type: types.cartDeleteProduct
})

export const updateProductCart = () => ({
    type: types.cartUpdateQuantityProduct
})

export const closeCart = (isCloseCart) => ({
    type: types.cartClose,
    payload: isCloseCart
})

export const setCart = (cart) => ({
    type: types.cartList,
    payload: cart
})