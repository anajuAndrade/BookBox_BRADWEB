import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return (
    <nav className="cabecalho">
      <span className="nomeSite">BOOKBOX</span>
      <div className="telasNavegacao">
        <Link to="/home">HOME</Link>
        <Link to="/genres">GÊNEROS</Link>
        <Link to="/Comunidade">COMUNIDADE</Link>
        <Link to="/lists">LISTAS</Link>
      </div>
      <input type="text" placeholder="🔍" className="barraPesquisa" />
    </nav>
  );
}