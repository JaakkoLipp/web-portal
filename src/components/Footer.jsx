import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="bg-darker text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Jaakko Lipponen</h5>
              <p>Building elegant solutions to complex problems.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p>
                &copy; {new Date().getFullYear()} Jaakko Lipponen. All rights
                reserved.
              </p>
              <div>
                <a href="#" className="text-white me-3">
                  Privacy Policy
                </a>
                <a href="#" className="text-white">
                  Terms of Service
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
