import React from 'react'
import './Lists.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Lists() {
  const listaDePerfis = [
    {
      id: 1,
      nomePerfil: 'Ana Julia Ev. Andrade',
      nomeLista: 'Livros Lidos em 2024',
      fotos: [
        'https://m.media-amazon.com/images/I/61QhNRjycfL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/81ZYw08O2bL._UF894,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/61TCwzWV9hL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71xh-XoYyaL._AC_UF1000,1000_QL80_.jpg',
        'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788565765480/mentirosos-sucesso-no-tiktok.jpg',
        'https://m.media-amazon.com/images/I/71k8NJQf3vL._UF894,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71+uI6EMwxL.jpg',
        'https://m.media-amazon.com/images/I/71L7r2oK0HL.jpg',
        'https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg'
      ],
    },

    {
      id: 2,
      nomePerfil: 'Ana Julia Ev. Andrade',
      nomeLista: 'Quero Ler',
      fotos: [
        'https://m.media-amazon.com/images/I/61QhNRjycfL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/81ZYw08O2bL._UF894,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/61TCwzWV9hL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71xh-XoYyaL._AC_UF1000,1000_QL80_.jpg',
        'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788565765480/mentirosos-sucesso-no-tiktok.jpg'
      ],
    }
  ];

  return ( 
    <div className="lists-container">
      <h1 className="title">LISTAS</h1>
        {listaDePerfis.map((perfil) => (
          <div key={perfil.id} className="profile-section">
            <div className="profile-header">
            <div className="verified-icon">✔</div>
              {/*<i class="bi bi-person-circle profile-icon"></i>*/}
              <div className="profile-info">
                <h3 id='nameProfile'>{perfil.nomePerfil}</h3>
                <h3>{perfil.nomeLista}</h3>
              </div>
            </div>

            <div className="photo-grid">
              {perfil.fotos.map((foto, index) => (
                <img key={index} src={foto} className="photo-item" />
              ))}
            </div>
          </div>
        ))}

      {/* Botão de Adicionar */}
      <div className="add-list-icon">
        <i className="bi bi-plus"></i>
      </div>

    </div>
  );
}

export default Lists;