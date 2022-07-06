/*
All the structure of the main home page 
SEE components folder for the content of each component
*/

import React, { useEffect, useContext } from 'react';
import { HomepageContext } from '../App';
import { scroller } from 'react-scroll';
import Banner from '../components/Banner';
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
            <Banner />
            <Bio />
            <Research />
            <ResearchProjects />
            <Contact />
        </div>
    )
};

export default Home;
