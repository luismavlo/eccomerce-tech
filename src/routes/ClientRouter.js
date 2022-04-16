import { Route, Routes } from "react-router-dom"
import PurshasesScreen from "../pages/ecommerce/PurshasesScreen"
import Footer from "../shared/Footer"
import Header from "../shared/Header"

const ClientRouter = () => {
  return (
    <> 
      <Header />
        <Routes>
            <Route path="purchases" element={<PurshasesScreen />} />
        </Routes>
      <Footer />
    </>
  )
}

export default ClientRouter