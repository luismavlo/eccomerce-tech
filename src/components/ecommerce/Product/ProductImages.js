import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProductImages = () => {

    const productDetail = useSelector( state => state.products.productDetail);

    const images = productDetail?.productImgs;

    const [ handleNext, setHandleNext ] = useState(0);

    useEffect(() => {
        const interval = setTimeout( () => {
            if(handleNext === images?.length - 1){
                setHandleNext(0);
            } else {
                setHandleNext(handleNext + 1);
            }
          }, 6000);
          return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section className="product_images">
            <div className="product_image_start">
                <img src={images?.[handleNext]} alt="Imagen Procto Principal" className="image_principal"/>
            </div>
            <div className="producto_images_option">
                {
                    productDetail.productImgs?.map( (image, i) => (
                        <div className={image === images[handleNext] ? 'image_selected' : ''} key={productDetail.productImgs[i]} >
                            <img 
                                src={image} 
                                alt="Imagen Producto"  
                                onClick={ () => setHandleNext(i) }
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default ProductImages;