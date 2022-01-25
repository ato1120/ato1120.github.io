import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header className='py-3' />
      <main>
        <Container>
          <h1>Alexandra To | PhD</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
