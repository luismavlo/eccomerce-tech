import React, { useState, useEffect } from 'react';

import { promo1, promo2, promo3, promo4, promo5 } from '../../../images';

const ProductImages = () => {

    const images = [ promo1, promo2, promo3, promo4, promo5 ];

    const [ handleNext, setHandleNext ] = useState(0);

    useEffect(() => {
        const interval = setTimeout( () => {
            if(handleNext === 4){
                setHandleNext(1);
            } else {
                setHandleNext(handleNext => handleNext + 1);
            }
          }, 6000);
          return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section className="product_images">
            <img src={images[handleNext]} alt="Imagen Procto Principal" className="image_principal"/>
            <div className="producto_images_option">
                {
                    images.map( (image, i) => (
                        <div className={image === images[handleNext] ? 'image_selected' : ''}>
                            <img 
                                src={image} 
                                alt="Imagen Producto" 
                                key={images[i]} 
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