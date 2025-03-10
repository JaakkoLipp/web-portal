import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ProgressBar,
  Carousel,
  Modal,
} from "react-bootstrap";
function About() {
  return (
    <>
      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-5">About Me</h2>
          <Row>
            <Col lg={6} className="mb-5">
              <h3>My Journey</h3>
              <p>
                I'm a passionate full-stack developer with 5 years of experience
                in creating web applications. I specialize in JavaScript
                frameworks like React and have a strong background in building
                scalable back-end systems with Node.js and Express.
              </p>
              <p>
                After completing my Computer Science degree, I worked for
                several tech startups before going freelance to work on more
                diverse projects. I enjoy solving complex problems and creating
                intuitive user experiences.
              </p>
              <div className="mt-4">
                <Button variant="outline-light" className="me-2">
                  <i className="bi bi-download me-2"></i>Download Resume
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <h3>Education & Experience</h3>
              <Card className="mb-3 bg-dark-card">
                <Card.Body>
                  <h5>Master of Science</h5>
                  <p className="text-light">LUT-University (2024-Present)</p>
                  <p>
                    Focusing on developing advanced knowledge and expertise for
                    the design and development of software and digital services
                    and digital transformation of business processes.
                  </p>
                </Card.Body>
              </Card>
              <Card className="mb-3 bg-dark-card">
                <Card.Body>
                  <h5>Technical Specialist</h5>
                  <p className="text-light">Telia Company (2023-Present)</p>
                  <p>
                    Working part time with large corporate clients worldwide to
                    maintain complex data and networking solutions.
                  </p>
                </Card.Body>
              </Card>
              <Card className="bg-dark-card">
                <Card.Body>
                  <h5>Bachelor of Science</h5>
                  <p className="text-light">LUT-University (2020-2024)</p>
                  <p>
                    Computer Science with economics & business minor studies.
                    Bachelor's Thesis on ChatGPT and AI for software
                    optimization graded 4/5.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
