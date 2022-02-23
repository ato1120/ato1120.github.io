import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import projects from '../projects';
import Breadcrumbs from './Breadcrumbs';

const Project = () => {
  // Get project name from URL
  const projectName = useLocation().pathname.slice(11);
  const project = projects.find((project) => project.linkName === projectName);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 960 });
  

  // Always start at top of the page
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      {isTabletOrMobile ? (
          <div id='main'>
            <section className='project'>
              <Breadcrumbs projectTitle = {project.title}/>
              <div className='container'>
                <h2>{project.title}</h2>
                <br />
                  <h4>Project Abstract:</h4>
                <div className='container'>
                    <img src={project.image} alt={project.imageDescription} />
                    <p>{project.abstract}</p>
                </div>
                <div className='container'>
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
                  <div className='container'>
                    <h4>Media:</h4>
                    <ol>
                      {project.media.map(media => (
                        <li key={media.mediaLinkTitle}>
                          <a href={media.mediaLink}>{media.mediaLinkTitle}</a> {media.mediaLinkInfo}
                        </li>
                      ))}
                    </ol>
                  </div>
                }
                {project.videoLinks &&
                  <div className='container'>
                    {project.videoLinks.map(video => (
                      <ReactPlayer
                        key={video}
                        url={video}
                      />
                    ))}
                  </div>
                }
              </div>
            </section>
          </div>
      ) : (
        <div id='main'>
          <Breadcrumbs projectTitle = {project.title}/>
          <section className='project'>
            <div className='container'>
              <h2>{project.title}</h2>
              <br />
                <h4>Project Abstract:</h4>
                <div className='container'>
                    <img src={project.image} alt={project.imageDescription} />
                    <p>{project.abstract}</p>
                </div>
                <div className='container'>
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
                  <div className='container'>
                    <h4>Media:</h4>
                    <ol>
                      {project.media.map(media => (
                        <li key={media.mediaLinkTitle}>
                          <a href={media.mediaLink}>{media.mediaLinkTitle}</a> {media.mediaLinkInfo}
                        </li>
                      ))}
                    </ol>
                  </div>
                }
                {project.videoLinks &&
                  <div className='container'>
                    {project.videoLinks.map(video => (
                      <ReactPlayer
                        key={video}
                        url={video}
                      />
                    ))}
                  </div>
                }
            </div>
          </section>
        </div>
      )}
    </>

  )
};

export default Project;
