import React from 'react'
import ProductCard from '../../components/ecommerce/ProductCard'
import Editor from '../../components/ui/Editor'
import Testimonials from '../../components/ui/Testimonials'
import Tips from '../../components/ui/Tips'


const HomeScreen = () => {
  return (
    <main>
      <div className='container'>
        <h2 className="main-title">New Arrivals for you</h2>

        <section className="container-products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>

        <section className="container__testimonials">
          <Testimonials />
        </section>


        <div className="container-editor">
          <Editor />
        </div>

        <section className="container-tips">
          <Tips />
        </section>
      </div>
    </main>
  )
}

export default HomeScreen