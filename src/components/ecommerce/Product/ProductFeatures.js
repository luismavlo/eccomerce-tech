import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductFeatures = () => {

    const { productDetail, products } = useSelector(state => state.products);


    const relatedProducts = products.filter(product => product.category.name === productDetail.category)

    console.log(relatedProducts)
    return (
        <section className="container_product_features">
            <h3>Featured Products</h3>
            <div className="product_features">
                {
                    relatedProducts.map(product => (
                        <div className="product">
                            <div className="product_image">
                                <img src={product.productImgs[0]} className='product__img' alt="Imagen Prueba" />
                                <div className="producto_button">
                                    <Link to={`/product/${product.id}`} >QUICK VIEW</Link>
                                </div>
                            </div>
                            <div className="product__description">
                                <p className="product__title">{product.title}</p>
                                <span className="product__price">${product.price}</span>
                            </div>
                            <i className="product__icon fa-solid fa-cart-plus"></i>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default ProductFeatures;