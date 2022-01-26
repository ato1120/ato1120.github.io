import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
} from 'cdbreact';
import { Nav, Container, Image, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as Scroll } from 'react-scroll';

const Sidebar = () => {
    
    return (
        <div style={{height: '100%', overflow: 'scroll initial', position: 'fixed' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#222729">
                <CDBSidebarHeader>
                    <Container style={{ textAlign: 'center' }}>
                        <Image src='/images/site_images/profile.png' width={50} height={50} border={0}></Image>
                        <h3>Alexandra To</h3>
                        <p>HCI Researcher</p>
                    </Container>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <ScrollLink
                            activeClass="active"
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={250}
                        >
                            <CDBSidebarMenuItem icon="home">CV / Bio</CDBSidebarMenuItem>
                        </ScrollLink>
                        <ScrollLink
                                activeClass="active"
                                to="/research"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={250}
                        >
                            <CDBSidebarMenuItem icon="user">Research</CDBSidebarMenuItem>
                        </ScrollLink>
                        <ScrollLink
                            activeClass="active"
                            to="/portfolio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={250}
                        >
                            <CDBSidebarMenuItem icon="table">Research Projects</CDBSidebarMenuItem>
                        </ScrollLink>
                        <ScrollLink
                                activeClass="active"
                                to="/contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={250}
                        >
                            <CDBSidebarMenuItem icon="envelope">Contact</CDBSidebarMenuItem>
                        </ScrollLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <Container className='py-3' style={{ display: 'flex', placeContent: 'space-evenly', width: '150px'}}>
                    <span class='fa-stack fa-xs'>
                        <a href="https://twitter.com/alexandra__to"><i class="fa-brands fa-twitter fa-lg" ></i></a>
                    </span>
                    <span class='fa-stack fa-xs'>
                    <a href="mailto:a.to[at]northeastern.edu"><i class="fa-solid fa-envelope fa-lg" ></i></a>
                    </span>
                    <span class='fa-stack fa-xs'>
                    <a href="https://scholar.google.com/citations?user=FB_pYfIAAAAJ&hl=en" textDecoration='none'><i class="fa-solid fa-graduation-cap fa-lg"></i></a>
                    </span>
                    </Container>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default Sidebar
