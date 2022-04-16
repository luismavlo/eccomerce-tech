import React from 'react';

const PurchaseInfo = ({ purchase }) => {

    return (
        <>
           {
                purchase.products?.map( product => (
                    <div className="purchase_info" key={product.id}>
                        <p>{product.title}</p>
                        <span>{product.productsInCart?.quantity}</span>
                        <p>$ {parseInt(product.price) * product.productsInCart?.quantity}.00</p>
                    </div>
                ))
           }
        </>
    );
};

export default PurchaseInfo;