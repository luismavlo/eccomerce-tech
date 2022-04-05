import { Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/ecommerce/HomeScreen"
import ProductScreen from "../pages/ecommerce/ProductScreen"
import Footer from "../shared/Footer"
import Header from "../shared/Header"



const StoreRouter = () => {
    return (
        <>  
            <Header />
            <Routes>
                <Route path="/product/:id" element={<ProductScreen />} />
                <Route path="/*" element={<HomeScreen />} />
            </Routes>
            <Footer />
        </>
      )
}

export default StoreRouter