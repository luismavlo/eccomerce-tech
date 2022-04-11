import React from 'react'
import { useNavigate } from 'react-router-dom'



const ProductCard = ({ product }) => {


  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/product/${product.id}`)
  }

  return (
    <div className='product' onClick={handleClick}>
        <img src={product.productImgs[0]} alt="" className='product__img'/>
        <div className="product__description">
            <h3 className="product__title">{product.title}</h3>
            <span className="product__price">${product.price}</span>
        </div>
        <i className="product__icon fa-solid fa-cart-plus"></i>
    </div>
  )
}

export default ProductCard