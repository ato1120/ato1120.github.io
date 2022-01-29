import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

const ResearchProjects = () => {
    return (
        // <Container className='py-3' style={{ textAlign: 'center' }} id='/portfolio'>
        //     <Row className='py-3'>
        //         <Col sm={12} md={6} lg={4}>
        //             <Card>
        //                 <Card.Img variant='top' src='/images/research_projects/careworkshop.jpg' alt="Several hands place sticky notes on a table at a PD workshop" />
        //                 <Card.Title>Coping After Racist Experiences (CARE)</Card.Title>
        //             </Card>
        //         </Col>
        //         <Col sm={12} md={6} lg={4}>
        //             <Card>
        //                 <Card.Img variant='top' src='/images/research_projects/pic02.jpg' alt="A colorful gradient placeholder" />
        //                 <Card.Title>Critical Race Theory for HCI</Card.Title>
        //             </Card>
        //         </Col>
        //         <Col sm={12} md={6} lg={4}>
        //             <Card>
        //                 <Card.Img variant='top' src='/images/research_projects/oldoutbreak.png' alt="A table with a four-person board game laid out" />
        //                 <Card.Title>Sensing Curiosity in Play and Responding (SCIPR)</Card.Title>
        //             </Card>
        //         </Col>
        //     </Row>
        //     <Row className='py-3'>
        //         <Col sm={12} md={6} lg={4}>
        //             <Card>
        //                 <Card.Img variant='top' src='/images/research_projects/TTGD.png' alt="An infinity-like diagram that demonstrates the game design process flow" />
        //                 <Card.Title>Tandem Transformational Game Design</Card.Title>
        //             </Card>
        //         </Col>
        //         <Col sm={12} md={6} lg={4}>
        //             <Card>
        //                 <Card.Img variant='top' src='/images/research_projects/diversityarkham.jpg' alt="Many character images from the Arkham Horror game" />
        //                 <Card.Title>Character Diversity for Digital and Non-Digital Games</Card.Title>
        //             </Card>
        //         </Col>
        //         <Col sm={12} md={6} lg={4}>
        //             <Card>
        //                 <Card.Img variant='top' src='/images/research_projects/pic03.jpg' alt="A colorful gradient placeholder" />
        //                 <Card.Title>Flash Teams &amp; Orgs</Card.Title>
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>
        <section id="portfolio" className="two">
            <Container>

                <header>
                    <h2>Selected Research Projects</h2>
                </header>

                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='item'>
                            <a href="./research/care.html" className="image fit"><Card.Img src="images/careworkshop.jpg" alt="Several hands place sticky notes on a table at a PD workshop" /></a>
                            <header>
                                <Card.Title>Coping After Racist Experiences (CARE)</Card.Title>
                            </header>
                        </Card>
                        <Card className='item'>
                            <a href="./research/crt.html" className="image fit"><Card.Img src="images/pic02.jpg" alt="A colorful gradient placeholder" /></a>
                            <header>
                                <Card.Title>Critical Race Theory for HCI</Card.Title>
                            </header>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className='item'>
                            <a href="./research/scipr.html" className="image fit"><Card.Img src="images/oldoutbreak.png" alt="A table with a four-person board game laid out" /></a>
                            <header>
                                <Card.Title>Sensing Curiosity in Play and Responding (SCIPR)</Card.Title>
                            </header>
                        </Card>
                        <Card className="item">
                            <a href="./research/ttgd.html" className="image fit"><Card.Img src="images/TTGD.png" alt="An infinity-like diagram that demonstrates the game design process flow" /></a>
                            <header>
                                <Card.Title>Tandem Transformational Game Design</Card.Title>
                            </header>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card className="item">
                            <a href="./research/characterdiversity.html" className="image fit"><Card.Img src="images/diversityarkham.jpg" alt="Many character images from the Arkham Horror game" /></a>
                            <header>
                                <Card.Title>Character Diversity for Digital and Non-Digital Games</Card.Title>
                            </header>
                        </Card>
                        <Card className="item">
                            <a href="./research/flashteams.html" className="image fit"><Card.Img src="images/pic03.jpg" alt="A colorful gradient placeholder" /></a>
                            <header>
                                <Card.Title>Flash Teams &amp; Orgs</Card.Title>
                            </header>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default ResearchProjects;
