import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Project from './components/Project';
import Footer from './components/Footer';
import Home from './views/Home';
import PageNotFound from './views/PageNotFound';

export const HomepageContext = createContext();

const App = () => {
  const [homepageLocation, setHomepageLocation] = useState('cv')
  const value = useMemo(() => ({ 
    homepageLocation, 
    setHomepageLocation }
    ), [homepageLocation]);

  return (
    <>
        <Router>
          <HomepageContext.Provider value={value}>
          <Sidebar />
          <Routes>
            <Route path='/portfolio/:linkname' element={<Project />} />
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          </HomepageContext.Provider>
        </Router>
    </>
  );
}

export default App;
