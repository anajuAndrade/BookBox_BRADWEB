import "./Rodape.css";

export default function Rodape() {
  return (
<footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h4>Mapa do Site</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Gêneros</a></li>
              <li><a href="#">Comunidade</a></li>
              <li><a href="#">Listas</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Desenvolvido Por</h4>
            <ul>
              <li><a href="https://github.com/anajuAndrade">Ana Julia Ev. Andrade</a></li>
              <li><a href="https://github.com/Isabelly-Nathalia">Isabelly Nathalia M. da Rocha</a></li>
              <li><a href="https://github.com/paolaabrantes">Paola Abrantes</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Siga-nos</h4>
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/*COLOCAR PARA QUAND PASSAR O MOUSE, FICAR AZUL*/}
        <div className="footer-bottom">
          <p>Copyright © 2024 BookBox. Todos os direitos reservados.</p>
          <ul className="footer-links">
            <li>Acessibilidade</li>
            <li>Termos & Condições</li>
            <li>Privacidade</li>
            <li>Legal</li>
          </ul>
          <p className="footer-note">
            Este website é melhor visualizado nas versões mais recentes do Google Chrome.
          </p>
        </div>
      </div>
    </footer>
  );
}
