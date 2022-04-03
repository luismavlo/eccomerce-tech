import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import AppRouter from './routes/AppRouter'

const EccomerceApp = () => {
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  )
}

export default EccomerceApp