import { Link } from 'react-router-dom'

export default function Rodape() {
    return (
        <footer className="footer">
            <div className="footerInfos">

                <div className="informações">
                    <h4>Mapa do Site</h4>
                    <div className='rotas'>
                        <Link to="/" className='links' onClick={() => window.scrollTo(0, 0)}>Home<br></br></Link>
                        <Link to="/Generos" className='links' onClick={() => window.scrollTo(0, 0)}>Gêneros<br></br></Link>
                        <Link to="/Comunidade" className='links' onClick={() => window.scrollTo(0, 0)}>Comunidade<br></br></Link>
                        <Link to="/lists" className='links' onClick={() => window.scrollTo(0, 0)}>Listas<br></br></Link>
                    </div>
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
                        <div className='falsoLink'>
                            <li>Facebook</li>
                        </div>
                        <div className='falsoLink'>
                            <li>Twitter</li>
                        </div>
                        <div className='falsoLink'>
                            <li>Instagram</li>
                        </div>
                        <div className='falsoLink'>
                            <li>YouTube</li>
                        </div>
                        <div className='falsoLink'>
                            <li>LinkedIn</li>
                        </div>
                    </ul>
                </div>

            </div>

            <div className="infosGerais">
                <p>Copyright © 2024 BookBox. Todos os direitos reservados.</p>
                <ul className="termos">
                    <div className='falsoLink'>
                        <li>Acessibilidade</li>
                    </div>
                    <div className='falsoLink'>
                        <li>Termos & Condições</li>
                    </div>
                    <div className='falsoLink'>
                        <li>Privacidade</li>
                    </div>
                    <div className='falsoLink'>
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