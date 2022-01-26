import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Bio = () => {
    
    return (
    <>
        <Container className='py-3' style={{ textAlign: 'center'}}>
            <header>
                <h2>Alexandra To, PhD</h2>

                <p>Alexandra is an Assistant Professor jointly appointed in the College of Arts, Media &amp; Design in the Art + Design (<a href="https://games.northeastern.edu/">Games</a>) department and the Khoury College of Computer Science at Northeastern University. In her work she uses human-computer interaction research methods, storytelling, and design to illuminate patterns of racial oppression in technology.</p>

                <Button href="./ATo_CV.pdf" download="AlexandraToCV" size='lg'>Download CV</Button>
            </header>
            <Container className='py-3'>
                <h3><i>Biography</i></h3>
                <p>
                    Alexandra is an HCI researcher, game designer, and racial justice activist. 
                </p>
                <p>
                    She received her Ph.D. in Human-Computer Interaction from Carnegie Mellon University where she was advised by Dr. Jessica Hammer and Dr. Geoff Kaufman. Previously she received both an M.S. and B.S. in Symbolic Systems with a concentration in HCI and a minor in Asian American Studies at Stanford University, advised by Dr. Michael Bernstein. 
                </p>
            </Container>
        </Container>
    </>
    )
};

export default Bio;
