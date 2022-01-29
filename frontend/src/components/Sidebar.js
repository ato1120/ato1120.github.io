import React from 'react';
// import {
//     CDBSidebar,
//     CDBSidebarContent,
//     CDBSidebarFooter,
//     CDBSidebarHeader,
//     CDBSidebarMenu,
//     CDBSidebarMenuItem
// } from 'cdbreact';
import { Nav, Container, Image, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as Scroll } from 'react-scroll';

const Sidebar = () => {
    
    return (
        <div id="header">
            <div className="top">
                <div id="logo">
                    <span className="image avatar48"><Image src="/images/profile.png" alt="Alexandra To" /></span>
                    <h1 id="title">Alexandra To</h1>
                    <p>HCI Researcher</p>
                </div>
                <nav id="nav">
                    <ul>
                        <li><a href="#" id="top-link"><span className="icon solid fa-home">CV / Bio</span></a></li>
                        <li><a href="#about" id="about-link"><span className="icon solid fa-user">Research</span></a></li>
                        <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Research Projects</span></a></li>
                        <li><a href="#contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
                    </ul>
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
