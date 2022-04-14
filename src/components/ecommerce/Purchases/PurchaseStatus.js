import React from 'react';
import PurchaseInfo from './PurchaseInfo';

const PurchaseStatus = ({ purchases }) => {

    return (
        <>
             <div className="purchases_list">
                {
                    purchases?.map( purchase => (
                        <div className="purchase_status" key={purchase.id}>
                            <p  className="purchase_title">date <span>{purchase.cart?.status} <i className="fa-solid fa-circle"></i></span></p>
                                <div className="purchase_info">
                                    <PurchaseInfo 
                                        purchase={purchase.cart}
                                    />
                                </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default PurchaseStatus;