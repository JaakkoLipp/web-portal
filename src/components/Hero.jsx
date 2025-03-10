import { Container, Row, Col, Button } from "react-bootstrap";
function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="hero-content">
              <h1>
                Hello, I'm <span className="highlight">Jaakko Lipponen</span>
              </h1>
              <h2>Full Stack Web Developer</h2>
              <p className="lead">
                I build modern web applications with React and Node.js
              </p>
              <div className="hero-buttons">
                <Button variant="primary" href="#projects" className="me-3">
                  View My Work
                </Button>
                <Button variant="outline-light" href="#contact">
                  Contact Me
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Hero;
