import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import { HomepageContext } from '../App';

const Breadcrumbs = (props) => {
    // Get the active page from the URL
    const location = useLocation();
    const path = location.pathname.slice(0, 10);
    const projectTitle  = props.projectTitle;
    const isTabletOrMobile = useMediaQuery({ maxWidth: 960 });

    const { setHomepageLocation } = useContext(HomepageContext);
    
    return (
        <>
            {isTabletOrMobile ? (
                <Breadcrumb id='mobile-crumbs'>
                    <BreadcrumbItem>
                        <Link to='/' onClick={() => setHomepageLocation('portfolio')} >&lt; &lt;</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem href='/portfolio' active={path === '/portfolio' ? true : false}>
                        Back to Research Projects
                    </BreadcrumbItem>
                </Breadcrumb>
            ) :
            (
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/' onClick={() => setHomepageLocation('bio')}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/' onClick={() => setHomepageLocation('bio')}>&lt; &lt;</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/' onClick={() => setHomepageLocation('portfolio')} >Research Projects</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to='/' onClick={() => setHomepageLocation('portfolio')} >&lt; &lt;</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem href='/portfolio' active={path === '/portfolio' ? true : false}>
                        {projectTitle}
                    </BreadcrumbItem>
                </Breadcrumb>
            )}
        </>
    )
};

export default Breadcrumbs;