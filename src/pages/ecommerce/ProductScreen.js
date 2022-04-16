import React, { useEffect } from 'react';
import ProductImages from '../../components/ecommerce/Product/ProductImages';
import ProductoInfo from '../../components/ecommerce/Product/ProductoInfo';
import ProductFeatures from '../../components/ecommerce/Product/ProductFeatures';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startSetProductDetail } from '../../redux/actions/products';

const ProductScreen = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(startSetProductDetail(id))
    }, [dispatch, id]);
    

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