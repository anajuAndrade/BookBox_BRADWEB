
import { Container, Row, Col } from 'react-bootstrap';
import qrCode from './img/qrCode.jpeg';
import evParceirosex from './img/evParceirosex.png'

export default function Comunidade() {
  return (
    <>
      <div id="comunidade">
        <Container className="my-5">
          <div id="header" className="text-center mb-4">
            <h1 id="titulo">COMUNIDADE</h1>
          </div>
          <Row className="justify-content-center align-items-center">
            <Col md="auto">
              <img src={qrCode} alt="QR Code para o grupo no WhatsAPP" className="img-fluid" />
            </Col>
            <Col md="6" className="text-start">
              <p><strong>PARTICIPE DO NOSSO CLUBE DO LIVRO NO GRUPO DO WHATSAPP!</strong></p>
              <p>BATE PAPO COM OUTROS LEITORES, METAS MENSAIS DE LEITURA E MUITO MAIS!</p>
            </Col>
          </Row>

          <div id="subtitulo" className="text-center mb-4">
            <br></br><br></br><h2>EVENTOS PARCEIROS</h2><br></br>
          </div>

          <Row className="justify-content-center">
            <Col md={4} className="mb-4 text-center">
              <div
                className="bg-light rounded mx-auto"
                style={{
                  width: '75%',  
                  paddingTop: '75%',  
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img src={evParceirosex} alt="Imagem do Evento" className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
              </div>
              <p className="mt-2 text-center"><strong>NOME</strong></p>
              <p className="text-center">SOBRE O EVENTO</p>
            </Col>

            <Col md={4} className="mb-4 text-center">
              <div
                className="bg-light rounded mx-auto"
                style={{
                  width: '75%',  
                  paddingTop: '75%',  
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img src={evParceirosex} alt="Imagem do Evento" className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
              </div>
              <p className="mt-2 text-center"><strong>NOME</strong></p>
              <p className="text-center">SOBRE O EVENTO</p>
            </Col>

            <Col md={4} className="mb-4 text-center">
              <div
                className="bg-light rounded mx-auto"
                style={{
                  width: '75%',  
                  paddingTop: '75%',  
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img src={evParceirosex} alt="Imagem do Evento" className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
              </div>
              <p className="mt-2 text-center"><strong>NOME</strong></p>
              <p className="text-center">SOBRE O EVENTO</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
