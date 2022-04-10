import { Route, Routes } from "react-router-dom"
import PurshasesScreen from "../pages/ecommerce/PurshasesScreen"



const ClientRouter = () => {
  return (
    <>  
        {console.log('hola')}
        <Routes>
            <Route path="purshases" element={<PurshasesScreen />} />
        </Routes>
    </>
  )
}

export default ClientRouter