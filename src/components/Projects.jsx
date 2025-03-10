import { useState } from "react";
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

function Projects() {
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

  // Handle opening the project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
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
    </>
  );
}

export default Projects;
