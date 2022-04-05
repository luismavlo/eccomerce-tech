import React from 'react'
import {huawei} from '../../images'

const ProductCard = () => {
  return (
    <div className='product'>
        <img src={huawei} alt="" className='product__img'/>
        <div className="product__description">
            <h3 className="product__title">HUAWEI MateBook 13s</h3>
            <span className="product__price">$1619</span>
        </div>
        <i className="product__icon fa-solid fa-cart-plus"></i>
    </div>
  )
}

export default ProductCard