import React from 'react';
import { useSelector } from 'react-redux';

const ProductoInfo = () => {

    const { productDetail } = useSelector( state => state.products );

    return (
        <section className="container_product_info">
            <h3>{ productDetail.title }</h3>
            <p>${ productDetail.price }</p>
            <p>Description</p>
            <p>{ productDetail.description }</p>
            <h5>Quantity</h5>
            <form>
                <input type="number" />
                <button>ADD TO CART</button>
            </form>
        </section>
    );
};

export default ProductoInfo;