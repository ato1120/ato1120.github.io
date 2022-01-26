import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Research = () => {
    return (
        <Container className='py-3' style={{ textAlign: 'center', width: '100vw'}} id='/research'>
            <header>
                <h2>Research Overview</h2>
            </header>
            <p>In my work I use qualitative methods to explore and study experiences of marginalization. I then utilize design methods to empower people in marginalized positions.</p>
            <p>I have additional experience with UX research, educational games research, and expert crowdsourcing research.</p>
            <Button href="jobs/ATo_ResearchStatement.pdf" download="AlexandraTo_ResearchStatement" size='lg'>Download Research Statement (2020)</Button>
            <Container className='py-3'>
                <h3>PhD Thesis</h3>
                <p><i>"Empowering Uncertainty Resolution for Marginalized Populations through Social Technologies"</i></p>
                <p>My thesis focuses on how marginalization can harmfully amplify the negative impact of uncertainty. I focused on two contexts of marginalization: 1) STEM learning environments for female and/or students of color and 2) social coping with interpersonal racism for adults.</p>
                <Button href="./papers/theses/ATo_PhD_Thesis.pdf" download="AlexandraTo_PhDThesis" size='lg'>Download PhD Thesis</Button>
            </Container>
        </Container>
    )
}

export default Research;
