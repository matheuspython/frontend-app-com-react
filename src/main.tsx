import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import Globals from './global/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Globals />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
