import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom'
import { startSetProducts } from '../redux/actions/products'
import ClientRouter from './ClientRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import StoreRouter from './StoreRouter'


  
  const AppRouter = () => {

  const dispatch = useDispatch();

  const token = localStorage.getItem('token')
  useEffect(() => {
    dispatch(startSetProducts())
  }, [dispatch]);
  
   
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/*' element={
                <PublicRouter>
                    <StoreRouter />
                </PublicRouter>
            } />

            <Route path='/store/*' element={
                <PrivateRouter isAuthenticated={ !!token }>
                    <ClientRouter />
                </PrivateRouter>
            } />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter