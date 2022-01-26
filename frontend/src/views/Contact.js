import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='py-3' style={{ textAlign: 'center' }}>
            <h2 className='py-3'>Contact</h2>

            <p>Get in touch with me to chat about research collaboration, speaking engagements, or to learn more about my work!</p>

            <h3 className='py-3'>Prospective Students</h3>
            <p>
                I'm happy to speak with PhD students looking for an advisor or co-advisor in CAMD (e.g., <a href="http://catalog.northeastern.edu/graduate/arts-media-design/interdisciplinary-programs/interdisciplinary-design-media-phd/">Interdisciplinary Design and Media PhD</a>) or Khoury (e.g., <a href="https://www.khoury.northeastern.edu/programs/computer-science-phd/">Computer Science PhD</a>). In an email to me, please include your interests, program, CV, and why you think we might be a good fit.
            </p>
            <p>
                Undergraduate and Masters students who have already been admitted to Northeastern and are interested in studying human-computer interaction and critical race theory or who are interested in designing or developing games or social technologies are welcome to contact me. Include your interests, degree or major, and resume or CV.
            </p>
            <Container style={{ display: 'flex', flexDirection:'column', padding: '5vh'}}>
                <Container>
                    <span class='fa-stack fa-lg'>
                        <a href="https://twitter.com/alexandra__to"><i class="fa-brands fa-twitter fa-2x" ></i></a>
                    </span>
                    <span class='fa-stack fa-lg'>
                        <a href="https://scholar.google.com/citations?user=FB_pYfIAAAAJ&hl=en" textDecoration='none'><i class="fa-solid fa-graduation-cap fa-2x"></i></a>
                    </span>
                </Container>
                <h6><b>Email</b>: a.to&#64;northeastern.edu</h6>
            </Container>
        </Container>
    );
};

export default Contact;
