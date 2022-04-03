import { Route, Routes } from "react-router-dom"
import PurshasesScreen from "../pages/ecommerce/PurshasesScreen"



const ClientRouter = () => {
  return (
    <>
        <Routes>
            <Route path="purshases" element={<PurshasesScreen />} />
        </Routes>
    </>
  )
}

export default ClientRouter