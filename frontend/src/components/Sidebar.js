import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import profilePicture from '../images/profile.png';

const Sidebar = () => {
    const location = useLocation();
    // Check for different screen sizes to control sidebar hiding mechanism
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    const isBigScreen = useMediaQuery({ minWidth: 1824 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 960 });
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isRetina = useMediaQuery({ minResolution: '2dppx' });

    const [showToggle, setShowToggle] = useState(isTabletOrMobile ? true : false)
    const [showSidebar, setShowSidebar] = useState(isTabletOrMobile ? false : true);
    // console.log(`isTabletOrMobile: ${isTabletOrMobile}`);
    // console.log(`showToggle: ${showToggle}`);
    // console.log(`showSidebar: ${showSidebar}`);

    // Add toggle button on load if screen is small
    useEffect(() => {
        if (isTabletOrMobile) {
            setShowToggle(isTabletOrMobile);
        }
        console.log(`showSidebar on load: ${showSidebar}`);
    }, [isTabletOrMobile])
    
    // Update state for whether or not sidebar should be shown or not
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        console.log(`showSidebar: ${showSidebar}`);
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

    const menu =
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
                                    to='bio'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={200}
                                >
                                    <span className="icon solid fa-home">CV / Bio</span>
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
                                    <span className="icon solid fa-user">Research</span>
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
                            <li><Link to='/'><span className="icon solid fa-home">CV / Bio</span></Link></li>
                            <li><Link to='/'><span className="icon solid fa-user">Research</span></Link></li>
                            <li><Link to='/' className='active'><span className="icon solid fa-th">Research Projects</span></Link></li>
                            <li><Link to='/'><span className="icon solid fa-envelope">Contact</span></Link></li>
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

    return (
        <>
            {showToggle && <div id="headerToggle" className="toggle" onClick={toggleSidebar}><i className="fas fa-bars toggle" ></i></div>}
            {showSidebar && menu}
        </>
    )
}

export default Sidebar
