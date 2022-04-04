import { Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/ecommerce/HomeScreen"
import ProductScreen from "../pages/ecommerce/ProductScreen"
import Footer from "../shared/Footer"
import Header from "../shared/Header"
import Slider from "../shared/Slider"


const StoreRouter = () => {
    return (
        <>  
            <Header />
            <Slider />
            <Routes>
                <Route path="/product/:id" element={<ProductScreen />} />
                <Route path="/*" element={<HomeScreen />} />
            </Routes>
            <Footer />
        </>
      )
}

export default StoreRouter