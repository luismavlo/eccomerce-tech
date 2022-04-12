import React from 'react';
import AlertScreen from '../../ui/AlertScreen';
import { startAddProductCart } from '../../../redux/actions/products';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

const ProductoInfo = () => {

    const dispatch = useDispatch();

    const { productDetail } = useSelector( state => state.products );
    const { alertScreen } = useSelector( state => state.ui);

    const { register, handleSubmit } = useForm();

    const addToCart = (data) => {
        const product = {
            id: productDetail?.id,
            quantity: parseInt(data?.quantity)
        }

        dispatch(startAddProductCart(product))
            .then( () => <AlertScreen message="Se a agregado el producto al carrito" severity="success" />);
    }

    return (
        <section className="container_product_info">
            <h3>{ productDetail.title }</h3>
            <p>${ productDetail.price }</p>
            <p>Description</p>
            <p>{ productDetail.description }</p>
            <h5>Quantity</h5>
                <form onSubmit={handleSubmit(addToCart)}>
                    <input 
                        type="number"
                        {...register("quantity", { required: true })}
                    />
                    <button>ADD TO CART</button>
                </form>
                {
                    alertScreen && <AlertScreen message="Se a agregado el producto al carrito" severity="success" />
                }
        </section>
    );
};

export default ProductoInfo;