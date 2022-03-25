import React, { useState } from 'react';
import './Navbar.css';
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';

const Navs = () => {
    const [colorBrand, setColorBrand] = useState("rgb(24, 119, 242)");
    const handleChangeColorBrand = () => {
        setColorBrand("#000");
    };

    const handleChangeColorBrandBack = () => {
        setColorBrand("rgb(24, 119, 242)");
    };

    return (
        <div className="container">
            <Navbar className="color-nav" expand="lg" variant="light">
                <Container className="navbar-item">
                    <Navbar.Brand href="/" className="navs-brand" onPointerEnter={handleChangeColorBrand} onPointerLeave={handleChangeColorBrandBack} style={{ color: `${colorBrand}` }}>
                        Resume
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#introduce" style={{ color: "black" }} >
                                Introduce
                            </Nav.Link>
                            <Nav.Link href="#about-me" style={{ color: "black" }} >
                                About
                            </Nav.Link>
                            <Nav.Link href="#skill" style={{ color:"black" }} >
                                Skill
                            </Nav.Link>
                            <Nav.Link href="#education-background" style={{ color: "black" }} >
                                Educational
                            </Nav.Link>
                            <Nav.Link href="#experience" style={{ color: "black" }} >
                                Experience
                            </Nav.Link>
                            <Nav.Link href="#contact-me" style={{ color: "black" }} >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default Navs;