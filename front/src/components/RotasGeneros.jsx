import { Route, Routes } from 'react-router-dom'
import Narrativo from '../components/layouts/Narrativo'

export default function RotasGeneros() {
  return (
    <Routes>
      <Route path="/Narrativo" element={<Narrativo />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}