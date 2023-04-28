import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../projects';

const ResearchProjects = () => {
    return (
        <section id="portfolio" className="two">
            <div className='container'>
                <header>
                    <h2>Selected Research Projects</h2>
                    *Last Updated 2020
                </header>
                <div className='row'>
                {projects.map(project => (
                    <div key={project.title} className="col-4 col-12-mobile">
                        <article className='item'>
                            <Link to={`/portfolio/${project.linkName}`} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={ project.thumbnailImage } alt={project.thumbnailImageDescription} />
                                <header>
                                    <h3>{ project.title }</h3>
                                </header>
                            </Link> 
                        </article>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
};

export default ResearchProjects;
