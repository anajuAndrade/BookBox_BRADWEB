// export default function Menu() {

//     return (
//         <>
//             <div className="cabecalho">
//                 <nav className="cabecalhoo">
//                     <span className="nomeSite">SITE DE LIVROS</span>
//                     <div className="telasNavegacao">
//                         <a href="#home">HOME</a>
//                         <a href="#genres">GÊNEROS</a>
//                         <a href="#community">COMUNIDADE</a>
//                         <a href="#lists">LISTAS</a>
//                     </div>
//                     <input type="text" placeholder="Buscar" className="pesquisa" />
//                 </nav>
//             </div>
//         </>
//     );
// }

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
          <input type="text" placeholder="Buscar" className="pesquisa" />
        </nav>
      </div>
    </>
  );
}