import '../../css/geralGeneros.css'

const Lirico = () => {
  const categorias = {
    ODE: [
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp'
    ],

    ELEGIA: [
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp'
    ],

    MADRIGAL: [
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp'
    ],

    EPITALÂMIO: [
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp'
    ],

    ÉCLOGA: [
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp',
      'https://http2.mlstatic.com/D_NQ_NP_721511-MLB20567637142_012016-O.webp'
    ]
  };

  return (
    <div className="container">
      <h1 className="titulo">LÍRICO</h1>
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

export default Lirico;