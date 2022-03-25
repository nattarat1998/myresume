import React, { useState } from 'react';
import './AboutMe.css';
import {
    Row,
    Col,
    Container
} from 'react-bootstrap';
import { BsWifi, BsCode } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import me_about from '../../Images/me-about.jpg';

const AboutMe = () => {
    return (
        <div className="container">
            <Container fluid="md">
                <Row>
                    <Col className="about-title">About Me</Col>
                </Row>
                <Row>
                    <Col className="about-subtitle">Personal Profile</Col>
                </Row>
            </Container>
            <Container fluid="md" className="container-about-detail">
                <Row>
                    <Col className="column-img-about">
                        <img src={me_about} className="img-about" />
                    </Col>
                    <Col className="column-profile-detail">
                        <Row>
                            <Col className="personal-profile">
                                I am an IoT engineer in IoT designer department with 2
                                years experience of hardware and software development.
                                Since I graduated from the department of agricultural
                                engineering, I am very interested in IoT smart farm. With the
                                knowledge about IoT development, I desire to improve the
                                quality of this field to live up to 'Smart farm'
                            </Col>
                        </Row><br/><br/>
                        <Row>
                            <Col className="iot-exp">
                                4 years
                            </Col>
                            <Col className="web-exp">
                                1.5 years
                            </Col>
                            <Col className="pj-exp">
                                10+
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="iot-exp-detail">
                                IoT development
                            </Col>
                            <Col className="web-exp-detail">
                                Web development
                            </Col>
                            <Col className="pj-exp-detail">
                                Projects
                            </Col>
                        </Row>
                        <Row>
                            <Col className="column-iot-icon">
                                <BsWifi className="iot-icon" style={{ color: "rgb(24, 119, 242)"}}/>
                            </Col>
                            <Col className="column-web-icon">
                                <BsCode className="pj-icon" style={{ color: "rgb(24, 119, 242)"}}/>
                            </Col>
                            <Col className="column-pj-icon">
                                <CgWebsite className="pj-icon" style={{ color: "rgb(24, 119, 242)"}}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default AboutMe;