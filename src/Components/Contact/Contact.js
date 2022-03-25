import React, { useState } from 'react';
import './Contact.css';
import {
    Button,
    Container,
    Form,
    Row,
    Col
} from 'react-bootstrap';
import me_quote from '../../Images/me_quote.jpg';

const Contact = () => {

    return (
        <div className="container">
            <Container className="quote-grid">
                <div className="quote-img">
                    <img src={me_quote} className="img-me-quote" />
                </div>
                <div className="quote">
                    {`<`}Never<br/> Stop<br/> Learning{`/>`}
                </div>
            </Container>
            <Container className="container-contact-header">
                <Row>
                    <Col className="contact-title">
                        Contact
                    </Col>
                </Row>
                <Row>
                    <Col className="contact-subtitle">
                        Keep in touch
                    </Col>
                </Row>
            </Container>
            <div className="contact-grid">
                <div className="container">
                    <h1 className="list-unstyled">
                    <li className="contact-detail">Phone : 095-1163777</li>
                    <li className="contact-detail">Email : nuttharut.1998@gmail.com</li>
                    <li className="contact-detail">Line Id : nattarat.yam</li>
                    
                    </h1>
                    <Button variant="outline-success" href="https://line.me/ti/p/u4O6EUhIAQ" target="_blank" className="btn-add-line">click this to add line</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;