import { Container, Row, Col } from "react-bootstrap";
import "./StyleFooter.css"
import filial from "../assets/img/logoFiliaRedondo.png";
const Footer = () => {
  return (
    <>
      <Container fluid className="containerFooter">
        <Row>
          <Col className="text-center">
            <img src={filial} alt="" className="logoFooter"  />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
