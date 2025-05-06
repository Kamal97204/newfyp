import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import Footer from './Components/layouts/Footer.jsx'
import NavBar from './Components/layouts/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <App />
    <Footer/>
  </StrictMode>,
)
