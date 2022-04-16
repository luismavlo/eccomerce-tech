import React from 'react';
import { useSelector } from 'react-redux';
import Purchases from '../../components/ecommerce/Purchases/Purchases';

const PurshasesScreen = () => {

  const { purchases } = useSelector( state => state.purchases );

  return (
    <section className="container_purchases_total">
      {
        purchases.purchases?.length === 0 ? (
          <div>
            <h2>There are no purchases available.</h2>
          </div>
        ) : (
          <Purchases />
        )
      }
    </section>
  )
}

export default PurshasesScreen;