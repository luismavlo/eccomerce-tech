import React, { useEffect } from 'react';
import AlertScreen from '../../ui/AlertScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startSetCart, startUpdateQuantity, startDeleteProductCart, closeCart } from '../../../redux/actions/cart';
import { startPurchaseCart } from '../../../redux/actions/purchases';

const CartForm = () => {

    const dispatch = useDispatch();

    const { cartOpen, cartList } = useSelector( state => state.cart );
    const { alertScreen } = useSelector( state => state.ui);

    useEffect(() => {
        dispatch(startSetCart());
    }, [dispatch, cartOpen]);

    useEffect(() => {
        dispatch(startSetCart());
    }, [dispatch]);

    const subtotal = () => {

        let sum = 0;

        cartList.products?.map( (price) => (
            sum += parseInt(price.price) * price?.productsInCart?.quantity
        ));

        return sum;
    }

    const deleteItemCart = (e, id) => {
        e.preventDefault();
        dispatch(startDeleteProductCart(id));
    }

    return (
        <div className="cart_products">
            <h3>Shoping Cart <button onClick={ () => dispatch(closeCart(false))} ><i className="fa-solid fa-x"></i></button></h3>
            {
                Object.keys(cartList).length === 0 ? (
                    <h2>You have nothing in your shopping cart. Continue Shopping</h2>
                ) : (
                    cartList.products?.map( product => (
                        <form  key={product.id}>
                            <div className="cart_container_products">
                                <button onClick={ (e) => deleteItemCart(e, product.id) }><i className="fa-solid fa-x"></i></button>
                                <p>{product.title}</p>
                                <input 
                                    type="text" 
                                    value={product.productsInCart?.quantity}
                                    onChange={ (e) => dispatch(startUpdateQuantity(product.id, e.target.value)) }
                                    pattern="[0-9]"
                                />
                                <p>${parseInt(product.price) * product.productsInCart?.quantity}.00</p>
                            </div>
                        </form>
                    ))
                )
            }
            {
                alertScreen && <AlertScreen message="Purchase made successfully" severity="success" />
            }
            {
                Object.keys(cartList).length === 0 ? (
                    <h2>You have nothing in your shopping cart. Continue Shopping</h2>
                ) : cartList.products?.length === 0 ? (
                    <h2>You have nothing in your shopping cart. Continue Shopping</h2>
                ) : (
                    <div className="cart_subtotal">
                        <p><span>Subtotal:</span> { subtotal() }.00</p>
                        <button className="cart_button_buy" onClick={ () => dispatch(startPurchaseCart()) }>CHECK OUT</button>
                    </div>
                )
            }
        </div>
    );
};

export default CartForm;