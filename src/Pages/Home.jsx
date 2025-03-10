import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Form,
  ProgressBar,
  Carousel,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for the project modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current and forecasted weather data based on user location or search.",
      technologies: ["JavaScript", "Bootstrap", "OpenWeather API"],
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, setting priorities, and tracking progress.",
      technologies: ["React", "Redux", "Firebase"],
      image: "/api/placeholder/600/400",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  // Handle input changes in the contact form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I will get back to you soon.");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  // Handle opening the project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="portfolio dark-theme">
      {/* Navigation Bar */}
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

      {/* About Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center mb-5">My Projects</h2>
          <Row>
            {projects.map((project) => (
              <Col key={project.id} lg={4} md={6} className="mb-4">
                <Card className="h-100 project-card bg-dark-card">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                      {project.description.substring(0, 100)}...
                    </Card.Text>
                    <div className="tech-stack">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="badge bg-primary me-1 mb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0">
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={() => openProjectModal(project)}
                    >
                      View Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Project Details Modal */}
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            contentClassName="bg-dark-modal"
            className="dark-theme-modal"
          >
            {selectedProject && (
              <>
                <Modal.Header closeButton>
                  <Modal.Title>{selectedProject.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid mb-3"
                  />
                  <h5>Description</h5>
                  <p>{selectedProject.description}</p>
                  <h5>Technologies Used</h5>
                  <div className="mb-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-primary me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="outline-light"
                    href={selectedProject.codeLink}
                    target="_blank"
                  >
                    <i className="bi bi-github me-2"></i>View Code
                  </Button>
                  <Button
                    variant="primary"
                    href={selectedProject.demoLink}
                    target="_blank"
                  >
                    <i className="bi bi-eye me-2"></i>Live Demo
                  </Button>
                </Modal.Footer>
              </>
            )}
          </Modal>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-darker testimonials">
        <Container>
          <h2 className="text-center mb-5">Testimonials</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Carousel className="dark-carousel">
                <Carousel.Item>
                  <div className="testimonial-item text-center p-4">
                    <div className="mb-3">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Client"
                        className="rounded-circle"
                      />
                    </div>
                    <p className="lead px-5">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis ex, enim dolores quas eos, labore facere dolorem
                      quo quam sunt ad eum nemo possimus accusantium nulla velit
                      explicabo qui. Magnam?."
                    </p>
                    <h5 className="mt-3">Sarah Johnson</h5>
                    <p className="text-muted">CEO, TechStart</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimonial-item text-center p-4">
                    <div className="mb-3">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Client"
                        className="rounded-circle"
                      />
                    </div>
                    <p className="lead px-5">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis ex, enim dolores quas eos, labore facere dolorem
                      quo quam sunt ad eum nemo possimus accusantium nulla velit
                      explicabo qui. Magnam?."
                    </p>
                    <h5 className="mt-3">Michael Chen</h5>
                    <p className="text-muted">CTO, WebInnovate</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimonial-item text-center p-4">
                    <div className="mb-3">
                      <img
                        src="/api/placeholder/80/80"
                        alt="Client"
                        className="rounded-circle"
                      />
                    </div>
                    <p className="lead px-5">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis ex, enim dolores quas eos, labore facere dolorem
                      quo quam sunt ad eum nemo possimus accusantium nulla velit
                      explicabo qui. Magnam?."
                    </p>
                    <h5 className="mt-3">Lisa Rodriguez</h5>
                    <p className="text-muted">Product Manager, AppSolutions</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Get In Touch</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Row>
                <Col md={5} className="mb-4 mb-md-0">
                  <div className="contact-info">
                    <div className="contact-item mb-4">
                      <h5>
                        <i className="bi bi-geo-alt-fill me-2"></i>Location
                      </h5>
                      <p>Turku, Lappeenranta</p>
                    </div>
                    <div className="contact-item mb-4">
                      <h5>
                        <i className="bi bi-envelope-fill me-2"></i>Email
                      </h5>
                      <p>email@test.com</p>
                    </div>
                    <div className="contact-item mb-4">
                      <h5>
                        <i className="bi bi-telephone-fill me-2"></i>Phone
                      </h5>
                      <p>+123 405678901</p>
                    </div>
                    <div className="social-links mt-4">
                      <h5>Social Profiles</h5>
                      <div className="d-flex">
                        <a href="#" className="me-3 social-link">
                          <i className="bi bi-github"></i>
                        </a>
                        <a href="#" className="me-3 social-link">
                          <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="#" className="me-3 social-link">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="social-link">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={7}>
                  <Card className="contact-form-card bg-dark-card">
                    <Card.Body>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="form-control-dark"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-control-dark"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="form-control-dark"
                          />
                        </Form.Group>
                        <Button
                          variant="primary"
                          type="submit"
                          disabled
                          className="w-100"
                        >
                          Send Message
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default Home;
