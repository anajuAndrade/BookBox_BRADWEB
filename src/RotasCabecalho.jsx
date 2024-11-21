import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './assets/Cabecalho'
import Home from './assets/Home'
import Generos from './assets/Generos'
import Comunidade from './assets/Comunidade'
import Lists from './assets/Lists'
import './index.css'
import './Cabecalho.css'

export default function Rotas() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Generos" element={<Generos />} />
        <Route path="/Comunidade" element={<Comunidade />} />
        <Route path="/Lists" element={<Lists />} />
      </Routes>
    </Router>
  );
}