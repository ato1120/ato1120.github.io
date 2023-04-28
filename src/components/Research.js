import React from 'react';
import researchStatement from '../documents/AlexandraTo_ResearchStatement.pdf';
import PhDThesis from '../documents/ATo_PhD_Thesis.pdf';

const Research = () => {
    return (
        <section id="research" className="three">
            <div className='container'>
                <header>
                    <h2>Research Overview</h2>
                </header>
                <div className='container'>
                    <p>In my work I use qualitative methods to explore and study experiences of marginalization. I then utilize design methods to empower people in marginalized positions.</p>
                    <p>I have additional experience with UX research, transformational games research, and expert crowdsourcing research.</p>
                    <a href={ researchStatement } className="button" download="AlexandraTo_ResearchStatement">Download Research Statement (2023)</a>
                </div>
                <div className='container'>
                    <br></br>
                    <h3>PhD Thesis</h3>
                    <p><i>"Empowering Uncertainty Resolution for Marginalized Populations through Social Technologies"</i></p>
                    <p>My thesis focused on how marginalization can harmfully amplify the negative impact of uncertainty. I focused on two contexts of marginalization: 1) STEM learning environments for female and/or students of color and 2) social coping with interpersonal racism for adults.</p>
                    <a href={ PhDThesis } className="button" download="AlexandraTo_PhDThesis">Download PhD Thesis (2020)</a>
                </div>
            </div>
        </section>
    )
}

export default Research
