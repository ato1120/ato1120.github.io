import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HomepageContext } from '../App';

const Breadcrumbs = (props) => {
    const projectTitle  = props.projectTitle;
    const isTabletOrMobile = useMediaQuery({ maxWidth: 960 });

    const { setHomepageLocation } = useContext(HomepageContext);
    
    return (
        <>
            {isTabletOrMobile ? (
                <Breadcrumb id='mobile-crumbs'>
                    <BreadcrumbItem linkAs='p' >
                        <Link to='/' onClick={() => setHomepageLocation('portfolio')} >&lt; &lt;</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem linkAs='p'>
                        Back to Research Projects
                    </BreadcrumbItem>
                </Breadcrumb>
            ) :
            (
                <Breadcrumb>
                    <BreadcrumbItem linkAs='p'>
                        <Link to='/' onClick={() => setHomepageLocation('cv')}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem linkAs='p'>
                        <Link to='/' onClick={() => setHomepageLocation('cv')}>&lt; &lt;</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem linkAs='p'>
                        <Link to='/' onClick={() => setHomepageLocation('portfolio')} >Research Projects</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem linkAs='p'>
                        <Link to='/' onClick={() => setHomepageLocation('portfolio')} >&lt; &lt;</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem linkAs='p'>
                        {projectTitle}
                    </BreadcrumbItem>
                </Breadcrumb>
            )}
        </>
    )
};

export default Breadcrumbs;