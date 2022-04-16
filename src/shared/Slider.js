import React, { useEffect, useState } from 'react'
import { promo1, promo2, promo3, promo4, promo5 } from '../images'

const images = [promo1, promo2, promo3, promo4, promo5]

const Slider = () => {



    const [handleNext, setHandleNext] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(handleNext === 4){
                setHandleNext(1)
            } else {
                setHandleNext(handleNext => handleNext + 1)
            }
          }, 4000)
          return () => clearInterval(interval)
    }, [handleNext]);


    const nextImage = () => {
        if (handleNext >= 4) {
            setHandleNext(0)
        } else if (handleNext < 0) {
            setHandleNext(4)
        } else {
            setHandleNext(handleNext + 1)
        }
    }

    const prevImage = () => {
        if (handleNext === 0) {
            setHandleNext(4)
        } else {
            setHandleNext(handleNext - 1)
        }
    }

    return (
        <div className="container-slider">
            <div className="slider" id='slider'>
                <div className="slider__section">
                    <img src={images[handleNext]} alt="" className="slider__img"  />
                    <div className="slider__content">
                        <h2 className='slider__title'>Technology for you</h2>
                        <p className='slider__txt'>All products sale 50% off</p>
                        <button className="btn-shop transparent">SHOP NOW</button>
                    </div> 
                </div>
            </div>
            <div className='slider__btn slider__btn--right' id='btn-right' onClick={nextImage}>&#62;</div>
            <div className='slider__btn slider__btn--left' id='btn-left' onClick={prevImage} >&#60;</div>
        </div>
    )
}

export default Slider