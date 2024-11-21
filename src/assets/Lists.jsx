import React from 'react'
import './Lists.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Lists() {
  const listaDePerfis = [
    {
      id: 1,
      nomePerfil: 'User 1',
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
        'https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg',
        'https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg',

      ],
    },
    {
      id: 2,
      nomePerfil: 'User 2',
      nomeLista: 'Quero Ler',
      fotos: [
        'https://m.media-amazon.com/images/I/61QhNRjycfL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/81ZYw08O2bL._UF894,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/61TCwzWV9hL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71xh-XoYyaL._AC_UF1000,1000_QL80_.jpg',
        'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788565765480/mentirosos-sucesso-no-tiktok.jpg',
      ],
    },
  ];

  return (
    <div className="lists-container">
      {listaDePerfis.map((perfil) => (
        <div key={perfil.id} className="profile-card">
          <div className="profile-header">
            <i class="bi bi-person-circle profile-icon"></i>
            <div className="profile-info">
              <h3>{perfil.nomePerfil}</h3>
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
      {/* botao de adicionar */}
      <div className="add-list-icon">
        <i className="bi bi-plus"></i>
      </div>
    </div>
  );
}

export default Lists;