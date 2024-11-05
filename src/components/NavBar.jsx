import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container id="navContainer">
        <Row>
          <Col xs="6">
            <Navbar.Brand href="/" id="navBrand">
              Peter Farrow
            </Navbar.Brand>
          </Col>
          <Col xs="6">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about-me">About Me</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/resume">Resum&eacute;</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
