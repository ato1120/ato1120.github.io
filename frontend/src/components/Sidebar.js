import React from 'react';
// import {
//     CDBSidebar,
//     CDBSidebarContent,
//     CDBSidebarFooter,
//     CDBSidebarHeader,
//     CDBSidebarMenu,
//     CDBSidebarMenuItem
// } from 'cdbreact';
import { Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as Scroll } from 'react-scroll';

const Sidebar = () => {
    const location = useLocation();
    // console.log(`location: ${location.pathname}`);
    let isHomePage = false;
    if (location.pathname === '/') {
        isHomePage = true;
    }
    console.log(`isHomePage: ${isHomePage}`);

    return (
        <div id="header">
            <div className="top">
                <div id="logo">
                    <span className="image avatar48"><Image src="/images/profile.png" alt="Alexandra To" /></span>
                    <h1 id="title">Alexandra To</h1>
                    <p>HCI Researcher</p>
                </div>
                <nav id="nav">
                    { isHomePage ? 
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
							<li><Link to='/'><span className="icon solid fa-th">Research Projects</span></Link></li>
							<li><Link to='/'><span className="icon solid fa-envelope">Contact</span></Link></li>
						</ul>
                    }
                </nav>
            </div>
            <div className="bottom">
                <ul className="icons">
                    <li><a href="https://twitter.com/alexandra__to" className="icon brands fa-twitter fa-2x"><span className="label">Twitter</span></a></li>
                    <li><a href="mailto:a.to[at]northeastern.edu" className="icon solid fa-envelope fa-2x"><span className="label">Email</span></a></li>
                    <li><a href="https://scholar.google.com/citations?user=FB_pYfIAAAAJ&hl=en" className="icon solid fa-graduation-cap fa-2x"><span className="label">Google Scholar</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
