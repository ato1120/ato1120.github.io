import React from 'react';
import { useLocation } from 'react-router-dom';
import projects from '../projects';

const Project = () => {
  // Get project name from URL
  const projectName = useLocation().pathname.slice(12);
  
  const project  = projects.find((project) => project.linkName === projectName);
  
  return (
    <div id='main'>
      <section>
        <h2>{project.title}</h2>
        <div className='container'>
          <h4 style={{ textAlign: 'left' }}>Project Abstract:</h4>
          <div className='row'>
            <div className='col-6' style={{ textAlign: 'left' }}>
              <p>{project.abstract}</p>
            </div>
            <div className='col-2'>
              <img src={project.image} alt={project.imageDescription} />
            </div>
          </div>
          <div className='container' style={{ textAlign: 'left' }}>
            <h4>Key Publications:</h4>
            <ol>
              {project.publications.map(publication => (
                <li key={publication.name}>{project.publication.authors} <i>{project.publication.name}</i>{project.publication.status} {project.publication.publicationInfo}.</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>

  )
};

export default Project;
