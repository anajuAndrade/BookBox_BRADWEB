import "./Rodape.css"

export default function Rodape() {
    return (
        <footer className="footer">
            <div className="footerInfos">

                {/* Configurar rotas */}
                <div className="informações">
                    <h4>Mapa do Site</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Gêneros</a></li>
                        <li><a href="#">Comunidade</a></li>
                        <li><a href="#">Listas</a></li>
                    </ul>
                </div>

                <div className="informações">
                    <h4>Desenvolvido Por</h4>
                    <ul>
                        <li><a href="https://github.com/anajuAndrade" target="blank">Ana Julia Ev. Andrade</a></li>
                        <li><a href="https://github.com/Isabelly-Nathalia" target="blank">Isabelly Nathalia M. da Rocha</a></li>
                        <li><a href="https://github.com/paolaabrantes" target="blank">Paola Abrantes</a></li>
                    </ul>
                </div>

                <div className="informações">
                    <h4>Siga-nos</h4>
                    <ul className="social-links">
                        <div class='falsoLink'>
                            <li>Facebook</li>
                        </div>
                        <div class='falsoLink'>
                            <li>Twitter</li>
                        </div>
                        <div class='falsoLink'>
                            <li>Instagram</li>
                        </div>
                        <div class='falsoLink'>
                            <li>YouTube</li>
                        </div>
                        <div class='falsoLink'>
                            <li>LinkedIn</li>
                        </div>
                    </ul>
                </div>

            </div>

            <div className="infosGerais">
                <p>Copyright © 2024 BookBox. Todos os direitos reservados.</p>
                <ul className="termos">
                    <div class='falsoLink'>
                        <li>Acessibilidade</li>
                    </div>
                    <div class='falsoLink'>
                        <li>Termos & Condições</li>
                    </div>
                    <div class='falsoLink'>
                        <li>Privacidade</li>
                    </div>
                    <div class='falsoLink'>
                        <li>Legal</li>
                    </div>
                </ul>
                <p className="nota">
                    Este website é melhor visualizado nas versões mais recentes do Google Chrome.
                </p>
            </div>
        </footer>
    );
}
