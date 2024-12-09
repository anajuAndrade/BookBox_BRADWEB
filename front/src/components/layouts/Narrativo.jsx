import '../../css/geralGeneros.css'

const Narrativo = () => {
  const categorias = {
    EPOPEIA: [
      'https://m.media-amazon.com/images/I/71T3Fjh+EXL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71zGxA2QuFL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/61tXzYe0O7L._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/31MLOs7I29L._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/61qnMljISqL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/61th70Zar5L._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/81VMpAQiTlL._AC_UY327_FMwebp_QL65_.jpg'
    ],

    ROMANCE: [
      'https://m.media-amazon.com/images/I/616U6mSP3lL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/81w-GCfqtjL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/91SDZ2eUj+L._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/61y5iLUKS3L._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/617d7u+qI9L._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71DPuiRWNqL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71zcu-Ke0IL._AC_UY327_FMwebp_QL65_.jpg'
    ],

    CONTO: [
      'https://m.media-amazon.com/images/I/71Oxrs+39bL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/81NQ5Ab53fL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/81aVPLJSGSL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71N52RipISL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/913NE3EyzML._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/51GCfjxuQ4L._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/81PxJkUNKyL._AC_UY327_FMwebp_QL65_.jpg'
    ],

    NOVELA: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAuDCd4gLdgn3UH8pJ4WHHHdm3mcbLAIo94-K1CpuVvfiwSE-s9KfAR6hRXAkooqod1pkgjY6V9tbrDJHRUWM_7bq3nwLSWQFCvAZkzsaTamw3-XM3NFFNWw',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQyh70L1mh059kkQgRvrqmC4DRNmfc0GNQfop6qrqsh-QAc_sWin37j1JA-B5joDnC0RJFeXuIvk8rbsSB1DuW80-kigKs1loqIYtSd0Uw',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzIHTgUof9kegu1k1bloyATBzIHzBhC8ZYMMlBUTd4UAqM2cDRJ3zf4OaH_yTm-UU1wEjDEdDXBuqKgfbN2XiBprAerkdGHDjEy-GCO2Q',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSElVjqhWK9tmG353ua01CWmep1FFp7dXMvLUB-tddsjgixd6M62lrOZtFfFwgOGNwU87o53rTwruuWN0P0IM14xQSOB1j8VOUBo_noCU3RcyFRyMhZfTXXDA',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDLyxPRG7-j0HLnZBLQ_3Hh0dNRcgPn8RVAHEmjFrRhfTh8tGnLARh5UeRLB3jsAg_QRUDeEpJSCh1LOemqE57bBnU7-6lj0BzxVH-DBr7bA0vDjiV0vaBaUI&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcdNDObnKchzWdEFpAlAGYENhjSYp1uyyzou_GCG3wEQyCFzqAeIBlc6TShnPZ70PBhCrdYULfbh2hPMxQh-cn-pQbTNc0XSUIiyay6QI5AgInyT0w8Dfn',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJCPKUX3awcxoekGUWCyHE9EUXb19fzoE-ZhKzuIXuAEdtdgTNBmgDFlmPd6OCHWj_wjDVEVxG8NXaSgwnE1_zNwi9QXbceA&usqp=CAY'
    ],

    FÁBULA: [
      'https://m.media-amazon.com/images/I/71iRmBmczOL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/71E3HHgBM6L._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/51EJEv2yyCL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/619zUjelknL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/91qsWvEw5dL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/81FcKrhx-yL._AC_UY327_FMwebp_QL65_.jpg',
      'https://m.media-amazon.com/images/I/610FNCdtsqL._AC_UY327_FMwebp_QL65_.jpg'
    ]
  };

  return (
    <div className="container">
      <h1 className="titulo">NARRATIVO</h1>
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

export default Narrativo;