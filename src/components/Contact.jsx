import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Contact() {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
  return (
    <>
      {" "}
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
    </>
  );
}

export default Contact;
