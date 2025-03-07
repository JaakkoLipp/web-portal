import { Button, Container } from "react-bootstrap";
import Topbar from "../components/Topbar";

function Home() {
  return (
    <>
      <Topbar></Topbar>
      {/*  First section */}
      <section
        className="hero d-flex align-items-center"
        style={{
          height: "calc(100vh - 56px)",
        }}
      >
        <Container className="text-center">
          <h1 className="display-4">h1 welcome</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            nesciunt doloribus, quam facere eaque, voluptates suscipit, ipsam ea
            exercitationem sint magnam asperiores quasi blanditiis vel nostrum
            rerum perferendis nisi illum.
          </p>
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </Container>
      </section>

      {/*  Second section */}
      <section
        className="about bg-body-tertiary d-flex align-items-center"
        style={{ height: "50vh" }}
      >
        <Container>
          <h1 className="display-4">h1 about</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            debitis ad, labore iste dicta non libero expedita excepturi corporis
            quasi iure est? Corporis suscipit voluptates illo! Doloribus quas
            distinctio cumque!
          </p>
          <ul>
            <li>amongus</li>
            <li>sus</li>
            <li>golf 7 tdi</li>
          </ul>
        </Container>

        <Container>
          <h1 className="display-4">h1 kino</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            debitis ad, labore iste dicta non libero expedita excepturi corporis
            quasi iure est? Corporis suscipit voluptates illo! Doloribus quas
            distinctio cumque!
          </p>
          <ul>
            <li>league</li>
            <li>plug</li>
            <li>don pollo</li>
          </ul>
        </Container>
      </section>

      {/*  Third section */}
      <section
        className="about d-flex align-items-center"
        style={{ height: "calc(100vh - 56px)" }}
      >
        <Container>
          <h1 className="display-4">h1 kino</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            debitis ad, labore iste dicta non libero expedita excepturi corporis
            quasi iure est? Corporis suscipit voluptates illo! Doloribus quas
            distinctio cumque!
          </p>
          <ul>
            <li>league</li>
            <li>plug</li>
            <li>don pollo</li>
          </ul>
        </Container>
      </section>
      {/*  Fourth section */}
      <section
        className="hero d-flex align-items-center"
        style={{
          background: "black",
          color: "white",
          height: "calc(100vh - 56px)",
        }}
      >
        <Container className="text-center">
          <h1 className="display-4">Contact</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            nesciunt doloribus, quam facere eaque, voluptates suscipit, ipsam ea
            exercitationem sint magnam asperiores quasi blanditiis vel nostrum
            rerum perferendis nisi illum.
          </p>
        </Container>
      </section>
    </>
  );
}

export default Home;
