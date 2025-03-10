import { Container, Row, Col, Carousel } from "react-bootstrap";

function Testimonials() {
  return (
    <>
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
    </>
  );
}

export default Testimonials;
