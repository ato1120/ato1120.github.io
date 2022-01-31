import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResearchProjects = () => {
    return (
        <section id="portfolio" className="two">
            <Container>
                <header>
                    <h2>Selected Research Projects</h2>
                </header>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='item'>
                            <Link to={'/portfolio/care'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <Card.Img src="images/careworkshop.jpg" alt="Several hands place sticky notes on a table at a PD workshop" />
                                <header>
                                    <Card.Title>Coping After Racist Experiences (CARE)</Card.Title>
                                </header>
                            </Link> 
                        </Card>
                        <Card className='item'>
                            <Link to={'/portfolio/crt'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <Card.Img src="images/pic02.jpg" alt="A colorful gradient placeholder" />
                                <header>
                                    <Card.Title>Critical Race Theory for HCI</Card.Title>
                                </header>
                            </Link>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='item'>
                            <Link to={'/portfolio/scipr'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <Card.Img src="images/oldoutbreak.png" alt="A table with a four-person board game laid out" />
                                <header>
                                    <Card.Title>Sensing Curiosity in Play and Responding (SCIPR)</Card.Title>
                                </header>
                            </Link>
                        </Card>
                        <Card className="item">
                            <Link to={'/portfolio/ttgd'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <Card.Img src="images/TTGD.png" alt="An infinity-like diagram that demonstrates the game design process flow" />
                                <header>
                                    <Card.Title>Tandem Transformational Game Design</Card.Title>
                                </header>
                            </Link>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="item">
                            <Link to={'/portfolio/characterdiversity'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <Card.Img src="images/diversityarkham.jpg" alt="Many character images from the Arkham Horror game" />
                                <header>
                                    <Card.Title>Character Diversity for Digital and Non-Digital Games</Card.Title>
                                </header>
                            </Link>
                        </Card>
                        <Card className="item">
                            <Link to={'/portfolio/flashteams'} className="image fit" style={{ textDecoration: 'none', color: 'black' }}>
                                <Card.Img src="images/pic03.jpg" alt="A colorful gradient placeholder" />
                                <header>
                                    <Card.Title>Flash Teams &amp; Orgs</Card.Title>
                                </header>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default ResearchProjects;
