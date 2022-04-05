import { Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/ecommerce/HomeScreen"
import ProductScreen from "../pages/ecommerce/ProductScreen"
import AboutScreen from '../pages/ecommerce/AboutScreen'


const StoreRouter = () => {
    return (
        <>
            <Routes>
                <Route path="product/:id" element={ <ProductScreen />} />
                <Route path="/*" element={ <HomeScreen />} />
                <Route path="about" element={ <AboutScreen /> } />
            </Routes>
        </>
      )
}

export default StoreRouter