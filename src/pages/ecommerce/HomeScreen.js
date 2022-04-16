import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/ecommerce/ProductCard'
import Editor from '../../components/ui/Editor'
import Testimonials from '../../components/ui/Testimonials'
import Tips from '../../components/ui/Tips'
import Slider from '../../shared/Slider'
import PopUp from '../../components/ui/PopUp';
import { useSelector } from 'react-redux'


const HomeScreen = () => {

  const [ popUp, setPopUp ] = useState(false);

  
  useEffect(() => {
    setPopUp(!popUp);
  }, []);

  const { products } = useSelector( state => state.products );

  const newProductsFiltered = products.filter((product, index) => index < 4);


  return (
    <>
      <Slider />
        <main>
          <PopUp popUp={popUp} setPopUp={setPopUp} />
          <div className='container'>
            <h2 className="main-title">New Arrivals for you</h2>
            <section className="container-products">
              {
                newProductsFiltered.map( product => ((
                  <ProductCard product={product} key={ product.id } />
                )))
              }
            </section>
            <div className='ovh'>
              <Testimonials />
            </div>
            
            <div className="container-editor">
              <Editor />
            </div>
            <section className="container-tips">
              <Tips />
            </section>
          </div>
        </main>
    </>
  )
}

export default HomeScreen