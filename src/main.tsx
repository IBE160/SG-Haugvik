// src/main.tsx
//*********************************************************************************
// Applikasjonens entry point: kobler React til DOM og laster global CSS (Tailwind)
//**********************************************************************************

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
