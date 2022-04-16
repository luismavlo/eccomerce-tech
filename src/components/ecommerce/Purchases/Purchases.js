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

    const [ currentPage, setCurrentPage ] = useState(0);
    const [ postsPerPage ] = useState(10);

    const currentPurchases = purchases.slice(currentPage, currentPage + postsPerPage);

    const prevPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if(purchases?.length > currentPage + postsPerPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const pagina = pageNumber => setCurrentPage(pageNumber);

    console.log(currentPurchases.length)

    return (
        <>
            <article className="container_puchases">
                <PurchaseStatus 
                    purchases={currentPurchases}
                />
            </article>
            {
                currentPurchases.length >= 10 ? (
                    <Pagination
                        prevPage={prevPage}
                        nextPage={nextPage}
                        currentPage={currentPage}
                        totalPost={purchases?.length}
                        postsPerPage={postsPerPage}
                        pagina={pagina}
                    />
                ) : (
                    <div></div>
                )
            }
        </>
    );
};

export default Purchases;