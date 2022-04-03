import { Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/ecommerce/HomeScreen"
import ProductScreen from "../pages/ecommerce/ProductScreen"


const StoreRouter = () => {
    return (
        <>
            <Routes>
                <Route path="product/:id" element={<ProductScreen />} />
                <Route path="/*" element={<HomeScreen />} />
            </Routes>
        </>
      )
}

export default StoreRouter