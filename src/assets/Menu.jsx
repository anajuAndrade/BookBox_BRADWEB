import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <div className="cabecalho">
        <nav className="cabecalhoo">
          <span className="nomeSite">SITE DE LIVROS</span>
          <div className="telasNavegacao">
            <Link to="/home">HOME</Link>
            <Link to="/genres">GÊNEROS</Link>
            <Link to="/Comunidade">COMUNIDADE</Link>
            <Link to="/lists">LISTAS</Link>
          </div>
          <input type="text" placeholder="🔍" className="barraPesquisa" />
        </nav>
      </div>
    </>
  );
}