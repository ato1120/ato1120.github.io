// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Footer from "./components/Footer";
import Bio from './views/Bio';
import Research from './views/Research';
import ResearchProjects from './views/ResearchProjects';
import Contact from './views/Contact';

const App = () => {
  return (
    <>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col id='scrolling-page'>
          <Bio />
          <Research />
          <ResearchProjects />
          <Contact />
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default App;
