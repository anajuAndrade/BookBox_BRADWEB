import { useState } from 'react'
import './App.css'

function BookSite() {
  return (
    <nav class='cabecalho'>
      <div id='nomeSite'>SITE DE LIVROS</div>
      <div id='menuNavegacao'>
        <a href="#home">HOME</a>
        <a href="#genres">GENEROS</a>
        <a href="#community">COMUNIDADE</a>
        <a href="#lists">LISTAS</a>
      </div>
      <input id='barraPesquisa'
        type="text"
        placeholder="Buscar"
      />
    </nav>
  );
}

export default BookSite;