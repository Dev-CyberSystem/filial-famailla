import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegador from "./components/Navegador";
import Carrousel from "./components/Carrousel";
import { Container, Row, Col } from "react-bootstrap";
import TarjetasInfo from "./components/TarjetasInfo";
import Footer from "./components/Footer";
import Novedades from "./components/Novedades";

function App() {
  return (
    <>
      <Navegador />
      <Carrousel />
      <Container className="mt-4">
        <Row>
            <Novedades />
          {/* <Col className="mt-4 align-self-center text-center">
           
          </Col> */}
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <h2>Actividades de la Filial</h2>
            <TarjetasInfo />
          </Col>
          <Col>
            <h2>Titulo 2</h2>
            <p>Texto 2</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
