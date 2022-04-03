import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom'
import ClientRouter from './ClientRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import StoreRouter from './StoreRouter'


  
  const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/*' element={
                <PublicRouter>
                    <StoreRouter />
                </PublicRouter>
            } />

            <Route path='/store/*' element={
                <PrivateRouter>
                    <ClientRouter />
                </PrivateRouter>
            } />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter