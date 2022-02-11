import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Project from './components/Project';
import Footer from './components/Footer';
import Home from './views/Home';
import PageNotFound from './views/PageNotFound';

const App = () => {

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/portfolio/:linkname' element={<Project />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
