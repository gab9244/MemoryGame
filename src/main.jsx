import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Board.css'
import './Home.css'
import { Board } from './Board'
import { Home } from './Home'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Board />
   <Home />
  </React.StrictMode>,
)
