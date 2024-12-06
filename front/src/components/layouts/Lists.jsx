import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/lists.css';
import listas from '../../../../backend/arquivos/listas'; 

function Lists() {
  // Inicia o pop-up fechado
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nomeAutor: '',
    nomeLista: '',
    livros: '',
  });

  // URLs fixas para cada idLista
  const urlFotos = {
    1: [
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
    2: [
      'https://m.media-amazon.com/images/I/71jrp43TCcL.jpg',
        'https://m.media-amazon.com/images/I/81IB63g5V2L._UF894,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71CO39Q9WZL._UF894,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/81YbCXxpP6L._UF894,1000_QL80_.jpg',
        'https://cirandacultural.fbitsstatic.net/img/p/madame-bovary-70962/257479.jpg?w=520&h=520&v=no-change&qs=ignore',
        'https://m.media-amazon.com/images/I/816a7zMD+FL.jpg'
    ],
    3: [
      'https://m.media-amazon.com/images/I/71ivq+NMtZL._SY342_.jpg',
        'https://m.media-amazon.com/images/I/A16dAJ1dHfL._SY342_.jpghttps://m.media-amazon.com/images/I/A16dAJ1dHfL._SY342_.jpg',
        'https://m.media-amazon.com/images/I/61sIgjajpSL._SY445_SX342_.jpg',
        'https://m.media-amazon.com/images/I/A1rIilGO9sL._SY342_.jpg',
        'https://m.media-amazon.com/images/I/91cNc4sY0gL._SY342_.jpg',
        'https://m.media-amazon.com/images/I/512HkHQ4ZmL._SY445_SX342_.jpg',
        'https://m.media-amazon.com/images/I/81i80Ar4IAL._SY342_.jpg',
        'https://m.media-amazon.com/images/I/41HXe7Zdu5L._SY445_SX342_.jpg'
    ],
    4: [
      'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg',
        'https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/81lQ5N0QwJL._AC_UF1000,1000_QL80_.jpg',
        'https://harpercollins.com.br/cdn/shop/products/9788595086371.jpg?v=1706884470',
        'https://m.media-amazon.com/images/I/819js3EQwbL.jpg'
    ],
    5: [
      'https://m.media-amazon.com/images/I/81MmeUtR8BL._UF894,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71sh8JtiZbL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71Ils+Co9fL.jpg',
        'https://m.media-amazon.com/images/I/4152pe7g7xL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/815+4rm+F-L._UF894,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71M6czhxmTL.jpg',
        'https://m.media-amazon.com/images/I/81pDk7HwimL._AC_UF350,350_QL50_.jpg',
        'https://m.media-amazon.com/images/I/71vrSJIKk3L._AC_UF1000,1000_QL80_.jpg'
    ],
    6: [
      'https://m.media-amazon.com/images/I/61MrmHGQbZL._SY342_.jpg',
        'https://m.media-amazon.com/images/I/71mWm5Oq7cL._SY342_.jpg',
        'https://m.media-amazon.com/images/I/71x-i7sKSvL._SY342_.jpg',
        'https://m.media-amazon.com/images/I/51aLmULO+LL._SY445_SX342_.jpg'
    ],
    7: [
      'https://m.media-amazon.com/images/I/71iHNKF9T9L._AC_UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/81LTEfXYgcL.jpg?auto_optimize=low&width=655',
      'https://static.wixstatic.com/media/9b5998_446bdd76fb60453db4c4b226ee29f1b5~mv2.jpg/v1/fill/w_670,h_1005,al_c,q_85,enc_auto/9b5998_446bdd76fb60453db4c4b226ee29f1b5~mv2.jpg',
      'https://m.media-amazon.com/images/I/516MEoctlxL._SY445_SX342_.jpg',
      'https://m.media-amazon.com/images/I/41gtsbMlucL._SY445_SX342_.jpg',
      'https://m.media-amazon.com/images/I/415r6UCQe1L._SY445_SX342_.jpg',
      'https://m.media-amazon.com/images/I/41HkMO3-RkL._SY445_SX342_.jpg',
      'https://m.media-amazon.com/images/I/61o5UoMs-hL._SY425_.jpg'
    ]
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      // Limpa os dados do formulário ao fechar o pop-up
      setFormData({ nomeAutor: '', nomeLista: '', livros: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    togglePopup();
    alert('Lista enviada! Em breve sua lista irá aparecer aqui!');
  };

  return (
    <div className="lists-container">
      <h1 className="title">LISTAS</h1>
      {listas.map((perfil) => (
        <div key={perfil.idLista} className="profile-section">
          <div className="profile-header">
            <i className="bi bi-person-circle profile-icon"></i>
            <div className="profile-info">
              <h3 id="nameProfile">{perfil.nomeUsuario}</h3>
              <h3>{perfil.nomeLista}</h3>
            </div>
          </div>

          <div className="photo-grid">
            {/* Renderiza imagens */}
            {urlFotos[perfil.idLista]?.map((foto, index) => (
              <img key={index} src={foto} className="photo-item" alt={`Foto ${index}`} />
            ))}
          </div>

        </div>
      ))}

      {/* Botão de Adicionar */}
      <div className="add-list-icon" onClick={togglePopup}>
        <i className="bi bi-plus"></i>
      </div>

      {/* Pop-up Condicional */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={togglePopup}>
              <i className="bi bi-x"></i>
            </button>
            <h2>Adicione uma nova lista!</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nomeAutor">Nome</label>
                <input
                  type="text"
                  id="nomeAutor"
                  name="nomeAutor"
                  value={formData.nomeAutor}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nomeLista">Nome da Lista</label>
                <input
                  type="text"
                  id="nomeLista"
                  name="nomeLista"
                  value={formData.nomeLista}
                  onChange={handleChange}
                  placeholder="Digite o nome da sua lista"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="livros">Livros a Adicionar</label>
                <textarea
                  id="livros"
                  name="livros"
                  value={formData.livros}
                  onChange={handleChange}
                  placeholder="Adicione os livros separados por vírgula"
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lists;
