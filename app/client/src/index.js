import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App/'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

const rootDiv = document.getElementById('root')

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootDiv
)
