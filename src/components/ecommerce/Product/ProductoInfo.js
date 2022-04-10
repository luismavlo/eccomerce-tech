import React from 'react';

const ProductoInfo = () => {
    return (
        <section className="container_product_info">
            <h3>Irayz Butterfly Sunglasses (Black)</h3>
            <p>$650</p>
            <p>Description</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis porro odit, minima voluptatibus sed eius odio magnam quod? Fuga, obcaecati.</p>
            <h5>Quantity</h5>
            <form>
                <input type="number" />
                <button>ADD TO CART</button>
            </form>
        </section>
    );
};

export default ProductoInfo;