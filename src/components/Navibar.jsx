import { Container, Navbar, Nav } from "react-bootstrap";

function Navibar() {
  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        expand="lg"
        fixed="top"
        className="navbar-dark bg-opacity-75 border-bottom border-white border-opacity-25"
      >
        <Container>
          <Navbar.Brand href="#home">Jaakko Lipponen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
