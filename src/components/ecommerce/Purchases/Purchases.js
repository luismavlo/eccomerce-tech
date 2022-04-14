import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSetPurchases } from '../../../redux/actions/purchases';
import Pagination from '../../ui/Pagination';
import PurchaseStatus from './PurchaseStatus';

const Purchases = () => {

    const dispatch = useDispatch();

    const { purchases } = useSelector( state => state.purchases );

    useEffect(() => {
        dispatch(startSetPurchases()); 
    }, [dispatch]);

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage ] = useState(10);

    const currentPurchases = purchases.purchases?.slice(currentPage, currentPage + postsPerPage);

    const prevPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if(purchases.purchases?.length > currentPage + postsPerPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const pagina = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <article className="container_puchases">
                <PurchaseStatus 
                    purchases={currentPurchases}
                />
            </article>
            <Pagination
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
                totalPost={purchases.purchases?.length}
                postsPerPage={postsPerPage}
                pagina={pagina}
            />
        </>
    );
};

export default Purchases;