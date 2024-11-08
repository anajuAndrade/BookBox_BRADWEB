import { useState } from 'react'
import './App.css'

function BookSite() {
  return (
    <div className="cabecalho">
      <nav className="cabecalhoo">
        <span className="nomeSite">SITE DE LIVROS</span>
        <div className="telasNavegacao">
          <a href="#home">HOME</a>
          <a href="#genres">GÊNEROS</a>
          <a href="#community">COMUNIDADE</a>
          <a href="#lists">LISTAS</a>
        </div>
        <input type="text" placeholder="Buscar" className="pesquisa" />
      </nav>
    </div>
  );
}

export default BookSite;