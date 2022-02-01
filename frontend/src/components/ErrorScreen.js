import React from 'react';
import { Container, Image } from 'react-bootstrap';

const ErrorScreen = () => {
  return (
    <div id="main">
        <section className="project">
            <Container>
                <h2>404 Error</h2>
                <h4 style={{ textAlign: 'center' }}>YOU DIDN'T SAY THE MAGIC WORD</h4>
                <Image src="/images/ned.gif" style={{ float: 'none' }} />
            </Container>
        </section>
    </div>
)
};

export default ErrorScreen;
