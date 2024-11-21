import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RotasCabecalho from './RotasCabecalho.jsx'
import RotasRodape from './RotasRodape.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RotasCabecalho />
    <RotasRodape />
  </StrictMode>
)