import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/ecommerce/ProductCard'
import Aside from '../../components/ecommerce/Shop/Aside'
import { promo7 } from '../../images/index'

const ShopScreen = () => {

    

    const [value, setValue] = useState([300, 2000]);

    const [type, setType] = useState('');

    const { products } = useSelector( state => state.products );


    const filterProductPerType = () =>{
        switch (true) {
            case type === 'tv':
                return products.filter(product => product.category.name === "Smart TV") 
        
            case type === 'smartphones':
                return products.filter(product => product.category.name === "Smartphones")

            case type === 'computers':
                return products.filter(product => product.category.name === "Computers")
            
            case type === 'remove':
                return products
            default:
                return products;
        }

        
    }


    const filterProductPerPrice = filterProductPerType().filter(product => product.price >= value[0] & product.price <= value[1])

    return (
        <>
            <img src={promo7} className="shop__banner" alt="" />
            <div className='container__shop'>
                <h2>New Arrivals for you</h2>
                <section className='shop__main-content shop__content-product'>
                    <aside className='shop__aside'>
                        <Aside value={value} setValue={setValue} type={type} setType={setType} />
                    </aside>
                    <section className="container-products shop__products">
                        {
                            filterProductPerPrice.map(product => (
                                <ProductCard product={product} key={product.id} />
                            ))
                        }
                        
                    </section>

                </section>
            </div>
        </>
    )
}

export default ShopScreen