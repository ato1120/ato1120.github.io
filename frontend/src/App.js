import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Footer from "./components/Footer";
import Bio from './views/Bio';
import Research from './views/Research';
import ResearchProjects from './views/ResearchProjects';
import Contact from './views/Contact';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#E9EEEE' }}>
        <Sidebar />
        <Container style={{ width: '100vw', }}>
          <main style={{ padding: '0', width: '100%' }}>
            <Container style={{ padding: '0', margin: '0'}}>
              <Routes>
                <Route path='/' exact element={<Bio />} />
                <Route path='/research' exact element={<Research />} />
                <Route path='/portfolio' exact element={<ResearchProjects />} />
                <Route path='/contact' exact element={<Contact />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
