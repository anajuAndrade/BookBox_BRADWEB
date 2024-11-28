import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Rotas from './components/RotasCabecRodap'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import '../src/css/cabecalho.css'
import '../src/css/rodape.css'

export default function App() {
  return (
    <main>
        <BrowserRouter>
            <Cabecalho />
            <Rotas />
            <Rodape />
        </BrowserRouter>
    </main>
  );
}