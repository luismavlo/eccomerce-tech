import React from 'react';
import { promo3 } from '../../../images';

const ProductFeatures = () => {
    return (
        <section className="container_product_features">
            <h3>Featured Products</h3>
            <div className="product_features">
                <div className="producto_feature_info">
                    <div className="product_image">
                        <img src={promo3} alt="Imagen Prueba" />
                        <div className="producto_button">
                            <a href="#">QUICK VIEW</a>
                        </div>
                    </div>
                    <p>
                        Fastrack Aviator
                        <i className="product__icon fa-solid fa-cart-plus"></i>
                    </p>
                    <span>$650</span>
                </div>
                <div className="producto_feature_info">
                    <div className="product_image">
                        <img src={promo3} alt="Imagen Prueba" />
                        <div className="producto_button">
                            <a href="#">QUICK VIEW</a>
                        </div>
                    </div>
                    <p>
                        Fastrack Aviator
                        <i className="product__icon fa-solid fa-cart-plus"></i>
                    </p>
                    <span>$650</span>
                </div>
                <div className="producto_feature_info">
                    <div className="product_image">
                        <img src={promo3} alt="Imagen Prueba" />
                        <div className="producto_button">
                            <a href="#">QUICK VIEW</a>
                        </div>
                    </div>
                    <p>
                        Fastrack Aviator
                        <i className="product__icon fa-solid fa-cart-plus"></i>
                    </p>
                    <span>$650</span>
                </div>
                <div className="producto_feature_info">
                    <div className="product_image">
                        <img src={promo3} alt="Imagen Prueba" />
                        <div className="producto_button">
                            <a href="#">QUICK VIEW</a>
                        </div>
                    </div>
                    <p>
                        Fastrack Aviator
                        <i className="product__icon fa-solid fa-cart-plus"></i>
                    </p>
                    <span>$650</span>
                </div>
            </div>
        </section>
    );
};

export default ProductFeatures;