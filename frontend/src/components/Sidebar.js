import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
} from 'cdbreact';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader>
                    <h2>Alexandra To</h2>
                    <h6>HCI Researcher</h6>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <Nav.Link as={Link} to='/'>
                            <CDBSidebarMenuItem icon="home">CV / Bio</CDBSidebarMenuItem>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/research'>
                            <CDBSidebarMenuItem icon="user">Research</CDBSidebarMenuItem>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/portfolio'>
                            <CDBSidebarMenuItem icon="table">Research Projects</CDBSidebarMenuItem>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/contact'>
                            <CDBSidebarMenuItem icon="envelope">Contact</CDBSidebarMenuItem>
                        </Nav.Link>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div style={{ padding: '20px 5px', }}>
                        Insert links to socials here
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default Sidebar
