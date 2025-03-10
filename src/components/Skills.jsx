import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <>
      <section id="skills" className="py-5 bg-darker">
        <Container>
          <h2 className="text-center mb-5">My Skills</h2>
          <Row>
            <Col md={6} className="mb-4">
              <h4>Frontend Technologies</h4>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>HTML5 & CSS3</span>
                  <span>95%</span>
                </div>
                <ProgressBar
                  now={95}
                  variant="info"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>JavaScript (ES6+)</span>
                  <span>90%</span>
                </div>
                <ProgressBar
                  now={90}
                  variant="info"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>React & Redux</span>
                  <span>85%</span>
                </div>
                <ProgressBar
                  now={85}
                  variant="info"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>Bootstrap & Tailwind</span>
                  <span>80%</span>
                </div>
                <ProgressBar
                  now={80}
                  variant="primary"
                  className="dark-progress"
                />
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <h4>Backend Technologies</h4>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>Node.js & Express</span>
                  <span>88%</span>
                </div>
                <ProgressBar
                  now={88}
                  variant="info"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>MongoDB</span>
                  <span>75%</span>
                </div>
                <ProgressBar
                  now={75}
                  variant="primary"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>SQL (MySQL, PostgreSQL)</span>
                  <span>70%</span>
                </div>
                <ProgressBar
                  now={70}
                  variant="primary"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>RESTful API Design</span>
                  <span>85%</span>
                </div>
                <ProgressBar
                  now={85}
                  variant="info"
                  className="dark-progress"
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} className="mb-4">
              <h4>Tools & Platforms</h4>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>Git & GitHub</span>
                  <span>90%</span>
                </div>
                <ProgressBar
                  now={90}
                  variant="info"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>Docker</span>
                  <span>65%</span>
                </div>
                <ProgressBar
                  now={65}
                  variant="primary"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>AWS</span>
                  <span>60%</span>
                </div>
                <ProgressBar
                  now={60}
                  variant="primary"
                  className="dark-progress"
                />
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <h4>Soft Skills</h4>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>Problem Solving</span>
                  <span>95%</span>
                </div>
                <ProgressBar
                  now={95}
                  variant="info"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>Communication</span>
                  <span>85%</span>
                </div>
                <ProgressBar
                  now={85}
                  variant="info"
                  className="dark-progress"
                />
              </div>
              <div className="skill-item mb-3">
                <div className="d-flex justify-content-between">
                  <span>Project Management</span>
                  <span>80%</span>
                </div>
                <ProgressBar
                  now={80}
                  variant="primary"
                  className="dark-progress"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Skills;
