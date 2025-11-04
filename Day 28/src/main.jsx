import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contenx from './Contenx.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenx>
      <App />
    </Contenx>
  </StrictMode>,
)
