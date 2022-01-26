import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-2'>
                        &copy; Alexandra To. All rights reserved. | Designed by Durand Enterprises LLC
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
