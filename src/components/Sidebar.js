/*
Rendering the sidebar with pieces that highlight 
*/


import React, { useEffect, useState, useContext } from 'react';
import { HomepageContext } from '../App';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import profilePicture from '../images/profile.png';

const Sidebar = () => {
    const location = useLocation();
    const { setHomepageLocation } = useContext(HomepageContext);

    // Check for different screen sizes to control sidebar hiding mechanism
    const isTabletOrMobile = useMediaQuery({ maxWidth: 960 });
    // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    // const isBigScreen = useMediaQuery({ minWidth: 1824 });
    // const isPortrait = useMediaQuery({ orientation: 'portrait' });
    // const isRetina = useMediaQuery({ minResolution: '2dppx' });

    const [showToggle, setShowToggle] = useState(isTabletOrMobile ? true : false)
    const [showSidebar, setShowSidebar] = useState(true);

    // Add toggle button on load if screen is small
    useEffect(() => {
        if (isTabletOrMobile) {
            setShowToggle(true);
        }
        else {
            setShowToggle(false);
        }
    }, [isTabletOrMobile])
    
    // Update state for whether or not sidebar should be shown or not
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        if (showSidebar === true) {
            document.querySelector('body').setAttribute('class', 'header-visible');
        }
        if (showSidebar === false) {
            document.querySelector('body').removeAttribute('class');
        }
    }

    // Determine whether sidebar is linking to sections on homepage or linking back to home from other page
    let isHomePage = false;
    if (location.pathname === '/') {
        isHomePage = true;
    }

    return (
        <>
            {showToggle && <div id="headerToggle" className="toggle" onClick={toggleSidebar}><i className="fas fa-bars toggle" ></i></div>}
            <div id="header">
                <div className="top">
                    <div id="logo">
                        <span className="image avatar48"><img src={profilePicture} alt="Alexandra To" /></span>
                        <h1 id="title">Alexandra To</h1>
                        <p>HCI Researcher</p>
                    </div>
                    <nav id="nav">
                        {isHomePage ?
                            <ul>
                                <li>
                                    <ScrollLink
                                        activeClass='active'
                                        to='cv'
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={200}
                                    >
                                        <span className="icon solid fa-home" >CV</span>
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass='active'
                                        to='bio'
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={200}
                                    >
                                        <span className="icon solid fa-address-card" >Bio</span>
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass='active'
                                        to='research'
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={200}
                                    >
                                        <span className="icon solid fa-microscope">Research</span>
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass='active'
                                        to='portfolio'
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={200}
                                    >
                                        <span className="icon solid fa-th">Research Projects</span>
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        activeClass='active'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={200}
                                    >
                                        <span className="icon solid fa-envelope">Contact</span>
                                    </ScrollLink>
                                </li>
                            </ul>
                            :
                            <ul>
                                <li><Link to='/' onClick={() => setHomepageLocation('cv')}><span className="icon solid fa-home">CV</span></Link></li>
                                <li><Link to='/' onClick={() => setHomepageLocation('bio')}><span className="icon solid fa-address-card">Bio</span></Link></li>
                                <li><Link to='/' onClick={() => setHomepageLocation('research')}><span className="icon solid fa-microscope">Research</span></Link></li>
                                <li><Link to='/' className='active' onClick={() => setHomepageLocation('portfolio')}><span className="icon solid fa-th">Research Projects</span></Link></li>
                                <li><Link to='/' onClick={() => setHomepageLocation('contact')}><span className="icon solid fa-envelope">Contact</span></Link></li>
                            </ul>
                        }
                    </nav>
                </div>
                <div className="bottom">
                    <ul className="icons">
                        <li><a href="https://twitter.com/alexandra__to" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="mailto:a.to[at]northeastern.edu" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                        <li><a href="https://scholar.google.com/citations?user=FB_pYfIAAAAJ&hl=en" className="icon solid fa-graduation-cap"><span className="label">Google Scholar</span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
