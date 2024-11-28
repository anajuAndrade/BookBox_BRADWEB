import { Route, Routes } from 'react-router-dom'
import Home from '../components/layouts/Home'
import Generos from '../components/layouts/Generos'
import Comunidade from './layouts/Comunidade'
import Lists from './layouts/Lists'

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Generos" element={<Generos />} />
      <Route path="/Comunidade" element={<Comunidade />} />
      <Route path="/Lists" element={<Lists />} />
    </Routes>
  );
}