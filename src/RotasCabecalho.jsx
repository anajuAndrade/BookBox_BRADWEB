import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './assets/Cabecalho'
import Comunidade from './assets/Comunidade'
import Lists from './assets/Lists'
import './index.css'
import './Cabecalho.css'

export default function Rotas() {
  return (
    <Router>
      <Menu />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> alterar para pagina correspondente
        <Route path="/genres" element={<Genres />} /> */}
        <Route path="/Comunidade" element={<Comunidade />} />
        <Route path="/Lists" element={<Lists />} />
      </Routes>
    </Router>
  );
}
