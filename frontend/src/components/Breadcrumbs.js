import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
    // Get the active page from the URL
    const location = useLocation();
    const path = location.pathname.slice(0, 10);
    
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <Link to='/'>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link to='/'>&lt; &lt;</Link>
            </BreadcrumbItem>
            <BreadcrumbItem href='/portfolio' active={path === '/portfolio' ? true : false}>
                Research Projects
            </BreadcrumbItem>
        </Breadcrumb>
    )
};

export default Breadcrumbs;