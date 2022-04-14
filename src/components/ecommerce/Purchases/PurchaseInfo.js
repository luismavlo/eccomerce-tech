import React from 'react';

const PurchaseInfo = ({ purchase }) => {

    return (
        <>
           {
                purchase.products?.map( product => (
                    <>
                        <p key={product.id}>{product.title}</p>
                        <span>{product.productsInCart?.quantity}</span>
                        <p>$ {parseInt(product.price) * product.productsInCart?.quantity}.00</p>
                    </>
                ))
           }
        </>
    );
};

export default PurchaseInfo;