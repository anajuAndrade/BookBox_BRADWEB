import '../../css/geralGeneros.css'

const Dramatico = () => {
  const categorias = {
    TRAGÉDIA: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],

    COMÉDIA: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],

    FARSA: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],

    AUTO: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]
  };

  return (
    <div className="container">
      <h1 className="titulo">DRAMÁTICO</h1>
      {Object.entries(categorias).map(([categoria, imagens]) => (
        <div key={categoria} className="categoria">
          <h2 className="subtitulo">{categoria}</h2>
          <div className="livros">
            {imagens.map((url, index) => (
              <div
                key={index}
                className="card"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dramatico;