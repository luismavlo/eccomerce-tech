import { Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/ecommerce/HomeScreen"
import ProductScreen from "../pages/ecommerce/ProductScreen"
import AboutScreen from '../pages/ecommerce/AboutScreen'
import ContactScreen from '../pages/ecommerce/ContactScreen'
import Footer from "../shared/Footer"
import Header from "../shared/Header"
import ShopScreen from "../pages/ecommerce/ShopScreen"

const StoreRouter = () => {
    return (
        <>  
            <Header />
                <Routes>
                    <Route path="product/:id" element={ <ProductScreen />} />
                    <Route path="about" element={ <AboutScreen /> } />
<<<<<<< HEAD
                    <Route path="contact" element={ <ContactScreen /> } />
=======
                    <Route path="shop" element={ <ShopScreen /> } />
                    <Route path="/*" element={ <HomeScreen />} />            
>>>>>>> developer
                </Routes>
            <Footer />
        </>
      )
}

export default StoreRouter