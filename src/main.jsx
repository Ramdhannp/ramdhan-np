// Node module
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Components
import './index.css'
// css links
import App from './App.jsx'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
