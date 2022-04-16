import { Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/ecommerce/HomeScreen"
import ProductScreen from "../pages/ecommerce/ProductScreen"
import AboutScreen from '../pages/ecommerce/AboutScreen'
import ContactScreen from '../pages/ecommerce/ContactScreen'
import Footer from "../shared/Footer"
import Header from "../shared/Header"
import ShopScreen from "../pages/ecommerce/ShopScreen"
import ModalLogin from "../components/ui/ModalLogin"
import { useSelector } from "react-redux"


const StoreRouter = () => {

    const { modalOpen } = useSelector(state => state.ui);

    return (
        <>
            {
                modalOpen && <ModalLogin />
            } 

            <Header />
                <Routes>
                    <Route path="product/:id" element={<ProductScreen />} />
                    <Route path="about" element={<AboutScreen />} />
                    <Route path="contact" element={<ContactScreen />} />
                    <Route path="shop" element={<ShopScreen />} />
                    <Route path="/*" element={<HomeScreen />} />
                </Routes>
            <Footer />
        </>
    )
}

export default StoreRouter