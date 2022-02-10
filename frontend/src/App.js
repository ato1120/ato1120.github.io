import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Project from './components/Project';
import Footer from './components/Footer';
// import Care from './components/Care';
// import CharacterDiversity from './components/CharacterDiversity';
// import CRT from './components/CRT';
// import FlashTeams from './components/FlashTeams';
// import SCIPR from './components/SCIPR';
// import TTGD from './components/TTGD';
import Home from './views/Home';
import PageNotFound from './views/PageNotFound';

const App = () => {

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          {/* <Route path='/portfolio/care' exact element={<Care />} /> */}
          <Route path='/portfolio/:linkname' element={<Project />} />
          {/* <Route path='/portfolio/crt' exact element={<CRT />} />
          <Route path='/portfolio/scipr' exact element={<SCIPR />} />
          <Route path='/portfolio/ttgd' exact element={<TTGD />} />
          <Route path='/portfolio/characterdiversity' exact element={<CharacterDiversity />} />
          <Route path='/portfolio/flashteams' exact element={<FlashTeams />} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
