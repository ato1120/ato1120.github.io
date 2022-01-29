import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Research = () => {
    return (
        <section id="about" className="three">
            <Container>
                <header>
                    <h2>Research Overview</h2>
                </header>
                <Container>
                    <p>In my work I use qualitative methods to explore and study experiences of marginalization. I then utilize design methods to empower people in marginalized positions.</p>
                    <p>I have additional experience with UX research, educational games research, and expert crowdsourcing research.</p>
                    <a href="jobs/ATo_ResearchStatement.pdf" className="button" download="AlexandraTo_ResearchStatement">Download Research Statement (2020)</a>
                </Container>
                <Container>
                    <br></br>
                    <h3>PhD Thesis</h3>
                    <p><i>"Empowering Uncertainty Resolution for Marginalized Populations through Social Technologies"</i></p>
                    <p>My thesis focuses on how marginalization can harmfully amplify the negative impact of uncertainty. I focused on two contexts of marginalization: 1) STEM learning environments for female and/or students of color and 2) social coping with interpersonal racism for adults.</p>
                    <a href="./papers/theses/ATo_PhD_Thesis.pdf" className="button" download="AlexandraTo_PhDThesis">Download PhD Thesis</a>
                </Container>
            </Container>
        </section>
    )
}

export default Research
