import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './components/ContextProvider/ContextProvider.jsx'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ContextProvider>
    <App/>
  </ContextProvider>
  </Provider>
)
