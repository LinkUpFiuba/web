import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'react-input-range/lib/css/index.css'

ReactDOM.render(
  <App className={style.body}/>,
  document.getElementById( 'root' )
)
registerServiceWorker()
