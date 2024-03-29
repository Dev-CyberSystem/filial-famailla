import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '/escudoFilial.jpg'


const Navegador = () => {
  return (
   
   <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Filial Famailla
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Info de la filial</Nav.Link>
            <Nav.Link href="#link">Noticias</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   </>
  )
}

export default Navegador