import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return (
    <nav className="cabecalho">
      <span className="nomeSite">BOOKBOX</span>
      <div className="telasNavegacao">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
        <Link to="/Generos" onClick={() => window.scrollTo(0, 0)}>GÊNEROS</Link>
        <Link to="/Comunidade" onClick={() => window.scrollTo(0, 0)}>COMUNIDADE</Link>
        <Link to="/lists" onClick={() => window.scrollTo(0, 0)}>LISTAS</Link>
      </div>
      <input type="text" placeholder="🔍" className="barraPesquisa" />
    </nav>
  );
}