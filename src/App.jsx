import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './assets/Menu';
import Comunidade from './assets/Comunidade';
import { useState } from 'react'
import './App.css'
import './index.css'

function BookSite() {
  return (
    <>
    <Router>
      <Menu />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> alterar para pagina correspondente
        <Route path="/genres" element={<Genres />} /> */}
        <Route path="/Comunidade" element={<Comunidade />} />
        {/* <Route path="/lists" element={<Lists />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default BookSite;


// import { useState } from 'react'
// import './App.css'

// function BookSite() {
//   return (
//     <div className="cabecalho">
//       <nav className="cabecalhoo">
//         <span className="nomeSite">SITE DE LIVROS</span>
//         <div className="telasNavegacao">
//           <a href="#home">HOME</a>
//           <a href="#genres">GÊNEROS</a>
//           <a href="#community">COMUNIDADE</a>
//           <a href="#lists">LISTAS</a>
//         </div>
//         <input type="text" placeholder="Buscar" className="pesquisa" />
//       </nav>
//     </div>
//   );
// }

// export default BookSite;

