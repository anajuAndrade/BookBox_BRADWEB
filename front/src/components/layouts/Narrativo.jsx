import "../../css/geralGeneros.css"

const Narrativo = () => {
  const [books, setBooks] = useState(Array(9).fill(null)); // Inicializa com 9 slots vazios

  const handleFileUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newBooks = [...books];
        newBooks[index] = reader.result; // Adiciona a imagem como base64
        setBooks(newBooks);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="book-grid">
      <h1>GÊNERO</h1>
      <div className="grid">
        {books.map((book, index) => (
          <div className="grid-item" key={index}>
            {book ? (
              <img src={book} alt={`Livro ${index + 1}`} className="book-image" />
            ) : (
              <label className="upload-placeholder">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, index)}
                />
                Adicionar Foto
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Narrativo;