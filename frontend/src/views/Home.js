import React from 'react';
import Bio from '../components/Bio';
import Research from '../components/Research';
import ResearchProjects from '../components/ResearchProjects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div id='main'>
            <Bio />
            <Research />
            <ResearchProjects />
            <Contact />
        </div>
    )
};

export default Home;
