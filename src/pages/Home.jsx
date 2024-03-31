import { Container, Row, Col } from "react-bootstrap";
import Carrousel from "../components/Carrousel";
import Novedades from "../components/Novedades";
import TarjetasInfo from "../components/TarjetasInfo";

const Home = () => {
  return (
    <>
      <Carrousel className="styleCarusel" />
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
    </>
  );
};

export default Home;
