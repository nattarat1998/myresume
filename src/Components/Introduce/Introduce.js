import React, { useState } from 'react';
import './Introduce.css';
import {
    Nav,
    Button
} from 'react-bootstrap';
import { BsGithub, BsFacebook, BsLinkedin, BsDownload } from 'react-icons/bs';
import me_intro from '../../Images/me-intro.jpg';

const Introduce = () => {
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <div className="introduce-grid">
                <div className="introduce-content">
                    <img src={me_intro} className="img-intro" />
                </div>
                <div className="introduce-content-detail">
                    <p className="intro-name">Hello. <br/>I'm Nattarat</p>
                    <p className="intro-role">Software Engineer</p>
                    <p className="intro-detail">Fully-earnestness and dedicated developer with 2 years of experience for website design and web server to meet the needs of customer.</p>
                </div>
                <div className="introduce-content">
                    <Nav className="flex-column">
                        <Nav.Link href="https://github.com/nattarat1998" target="_blank">
                            <BsGithub className="icon-intro" />
                        </Nav.Link>
                        <Nav.Link href="https://www.facebook.com/pinkpnather.nei.9/" target="_blank">
                            <BsFacebook className="icon-intro" />
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/nattarat1998/" target="_blank">
                            <BsLinkedin className="icon-intro" />
                        </Nav.Link>
                        <Nav.Link>
                            <Button variant="outline-primary" className="btn-cv">Download CV <BsDownload className="icon-download"/></Button>
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        </div>
    )
};

export default Introduce;