import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return (
    <nav className="cabecalho">
      <span className="nomeSite">BOOKBOX</span>
      <div className="telasNavegacao">
        <Link to="/">HOME</Link>
        <Link to="/Generos">GÊNEROS</Link>
        <Link to="/Comunidade">COMUNIDADE</Link>
        <Link to="/lists">LISTAS</Link>
      </div>
      <input type="text" placeholder="🔍" className="barraPesquisa" />
    </nav>
  );
}