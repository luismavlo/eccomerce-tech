import React from 'react'
import ProductCard from '../../components/ecommerce/ProductCard'
import Aside from '../../components/ecommerce/Shop/Aside'
import { promo7 } from '../../images/index'

const ShopScreen = () => {
    return (
        <>
            <img src={promo7} className="shop__banner" alt="" />
            <div className='container__shop'>
                <h2>New Arrivals for you</h2>
                <section>
                    <aside className='shop__aside'>
                        <Aside />
                    </aside>
                    <section className="container-products shop__products">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </section>

                </section>
            </div>
        </>
    )
}

export default ShopScreen