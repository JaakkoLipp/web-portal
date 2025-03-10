/*import {
 Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ProgressBar,
  Carousel,
  Modal,
} from "react-bootstrap";*/
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

// Components
import Hero from "../components/Hero";
import Navibar from "../components/Navibar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="portfolio dark-theme">
      {/* Navigation Bar */}
      <Navibar></Navibar>

      {/* Hero Section */}
      <Hero></Hero>

      {/* About Section */}
      <About></About>

      {/* Skills Section */}
      <Skills></Skills>

      {/* Projects Section */}
      <Projects></Projects>

      {/* Testimonials Section */}
      <Testimonials></Testimonials>

      {/* Contact Section */}
      <Contact></Contact>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
