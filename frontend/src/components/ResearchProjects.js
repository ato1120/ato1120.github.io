import React from 'react';
import { Link } from 'react-router-dom';

const ResearchProjects = () => {
    return (
        <section id="portfolio" className="two">
            <div className='container'>
                <header>
                    <h2>Selected Research Projects</h2>
                </header>
                <div className='row'>
                    <div className="col-4 col-12-mobile">
                        <article className='item'>
                            <Link to={'/portfolio/care'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src="images/careworkshop.jpg" alt="Several hands place sticky notes on a table at a PD workshop" />
                                <header>
                                    <h3>Coping After Racist Experiences (CARE)</h3>
                                </header>
                            </Link> 
                        </article>
                        <article className='item'>
                            <Link to={'/portfolio/crt'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src="images/pic02.jpg" alt="A colorful gradient placeholder" />
                                <header>
                                    <h3>Critical Race Theory for HCI</h3>
                                </header>
                            </Link>
                        </article>
                    </div>
                    <div className="col-4 col-12-mobile">
                        <article className='item'>
                            <Link to={'/portfolio/scipr'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src="images/oldoutbreak.png" alt="A table with a four-person board game laid out" />
                                <header>
                                    <h3>Sensing Curiosity in Play and Responding (SCIPR)</h3>
                                </header>
                            </Link>
                        </article>
                        <article className="item">
                            <Link to={'/portfolio/ttgd'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src="images/TTGD.png" alt="An infinity-like diagram that demonstrates the game design process flow" />
                                <header>
                                    <h3>Tandem Transformational Game Design</h3>
                                </header>
                            </Link>
                        </article>
                    </div>
                    <div className="col-4 col-12-mobile">
                        <article className="item">
                            <Link to={'/portfolio/characterdiversity'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src="images/diversityarkham.jpg" alt="Many character images from the Arkham Horror game" />
                                <header>
                                    <h3>Character Diversity for Digital and Non-Digital Games</h3>
                                </header>
                            </Link>
                        </article>
                        <article className="item">
                            <Link to={'/portfolio/flashteams'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src="images/pic03.jpg" alt="A colorful gradient placeholder" />
                                <header>
                                    <h3>Flash Teams &amp; Orgs</h3>
                                </header>
                            </Link>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ResearchProjects;
