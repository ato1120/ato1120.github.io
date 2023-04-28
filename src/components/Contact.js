import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <section id="contact" className="four">
            <Container>
                <header>
                    <h2>Contact</h2>
                </header>
                <p>Get in touch with me to chat about research collaboration, speaking engagements, consulting, or to learn more about my work!</p>
                <Container>
                    <h3>Prospective Students</h3>
                    <p>
                        <b>As of AY 2022-2023 I am not taking new PhD students. </b> 
                        Typically I can advise or co-advise PhDs in CAMD 
                        (e.g., <a href="http://catalog.northeastern.edu/graduate/arts-media-design/interdisciplinary-programs/interdisciplinary-design-media-phd/">Interdisciplinary Design and Media PhD</a>) 
                        or Khoury (e.g., <a href="https://www.khoury.northeastern.edu/programs/computer-science-phd/">Computer Science PhD</a>).
                    </p>
                    <p>
                        Undergraduate and Masters students who have already been admitted to Northeastern 
                        and are interested in studying human-computer interaction and critical race theory 
                        or who are interested in designing or developing games or social technologies are 
                        welcome to contact me. Include your interests, degree or major, and resume or CV.
                    </p>
                </Container>
                <Container className='py-3'>
                    <a href="https://twitter.com/alexandra__to" className="icon brands fa-twitter" style={{ padding: '0 5px' }}><span className="label">Twitter</span></a>
                    <a href="https://scholar.google.com/citations?user=FB_pYfIAAAAJ&hl=en" className="icon solid fa-graduation-cap" style={{ padding: '0 5px' }}><span className="label">Google Scholar</span></a>
                </Container>

                <b>Email</b>: <a href="mailto:a.to[at]northeastern.edu" style={{textDecoration: 'none', color: 'black'}}>a.to[at]northeastern.edu</a>
            </Container>
        </section>
    );
};

export default Contact;
