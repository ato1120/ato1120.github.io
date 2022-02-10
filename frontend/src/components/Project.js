import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import projects from '../projects';

const Project = () => {
  // Get project name from URL
  const projectName = useLocation().pathname.slice(11);  
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
                <li key={publication.name}>
                  {publication.authors} {publication.publicationDate ? publication.publicationDate : null} <a href={publication.publicationLink ? publication.publicationLink : null}><i>{publication.name}</i></a>{publication.status ? publication.status : null} {publication.publicationInfo} {publication.authorNotes ? publication.authorNotes : null}
                </li>
              ))}
            </ol>
          </div>
          {project.media && 
            <div className='container' style={{ textAlign: 'left' }}>
              <h4>Media:</h4>
              <ol>
                {project.media.map(media => (
                  <li key={media.mediaLinkTitle}>
                    <a href={media.mediaLink}>{media.mediaLinkTitle}</a>{media.mediaLinkInfo}
                  </li>
                ))}
              </ol>
            </div>
          }
          {project.videoLinks &&
            <>
              {project.videoLinks.map(video => (
                <ReactPlayer 
                    key={video} 
                    url={video}
                />
              ))}
            </>
          }
        </div>
      </section>
    </div>

  )
};

export default Project;
