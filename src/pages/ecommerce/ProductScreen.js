import React from 'react';
import ProductImages from '../../components/ecommerce/Product/ProductImages';
import ProductoInfo from '../../components/ecommerce/Product/ProductoInfo';
import ProductFeatures from '../../components/ecommerce/Product/ProductFeatures';

const ProductScreen = () => {
    return (
      <>
        <section className="container_product_screen">
          <ProductImages />
          <ProductoInfo />
        </section>
        <section>
          <ProductFeatures />
        </section>
      </>
    );
};

export default ProductScreen;