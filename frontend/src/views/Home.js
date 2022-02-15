import React, { useEffect, useState, useContext } from 'react';
import { HomepageContext } from '../App';
import { scroller } from 'react-scroll';
import Bio from '../components/Bio';
import Research from '../components/Research';
import ResearchProjects from '../components/ResearchProjects';
import Contact from '../components/Contact';

const Home = () => {
    const homepageLocation = useContext(HomepageContext).homepageLocation;

    useEffect(() => {
        scroller.scrollTo(homepageLocation);
    }, [homepageLocation])

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
