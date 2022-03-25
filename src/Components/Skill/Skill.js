import React, { useState } from 'react';
import './Skill.css';
import {
    Container,
    Row,
    Col,
    ProgressBar
} from 'react-bootstrap';
import { BiCodeCurly } from 'react-icons/bi';
import { AiOutlineDatabase } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';
import { BsCode } from 'react-icons/bs';

const Skill = () => {
    return (
        <div className="container">
            <Container className="container-skills" fluid>
                <Row>
                    <Col className="skills-title">
                        Skills
                    </Col>
                </Row>
                <Row>
                    <Col className="skills-subtitle">
                        Stack Usage
                    </Col>
                </Row>
            </Container>
            <Container className="container-skills-detail">
                    {/* <div className="header-skill">
                        <Row>
                            <Col className="front-end-title">
                                <BsCode style={{ color: "rgb(24, 119, 242)"}} /> Front-End
                            </Col>
                            <Col className="icon-dropdown">
                                <IoIosArrowDropdown style={{ color: "rgb(24, 119, 242)"}} className="drop-fe" />
                            </Col>
                        </Row>
                    </div> */}
                    <div className="stack-container">
                        <Row>
                            <Col className="front-end-title">
                                <BsCode style={{ color: "rgb(24, 119, 242)"}} /> Front-End
                            </Col>
                            <Col className="icon-dropdown">
                                <IoIosArrowDropdown style={{ color: "rgb(24, 119, 242)"}} className="drop-fe" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="stack-name">
                                ReactJS with Redux
                            </Col>
                            <Col className="stack-level">
                                Advanced
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={75} />
                            </Col>
                        </Row><br/>

                        <Row>
                            <Col className="stack-name">
                                VueJS with VueX
                            </Col>
                            <Col className="stack-level">
                                Basic
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={25} />
                            </Col>
                        </Row><br/>

                        <Row>
                            <Col className="stack-name">
                                HTML
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>

                        <Row>
                            <Col className="stack-name">
                                CSS
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>

                        <Row>
                            <Col className="stack-name">
                                JavaScript
                            </Col>
                            <Col className="stack-level">
                                Advanced
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={75} />
                            </Col>
                        </Row>
                    </div>
                    {/* <div className="header-skill">
                        <Row>
                            <Col className="back-end-title">
                                <BiCodeCurly style={{ color: "rgb(24, 119, 242)"}} /> Back-End
                            </Col>
                            <Col className="icon-dropdown">
                                <IoIosArrowDropdown style={{ color: "rgb(24, 119, 242)"}} className="drop-be" />
                            </Col>
                        </Row>
                    </div> */}
                    <div className="stack-container">
                        <Row>
                            <Col className="back-end-title">
                                <BiCodeCurly style={{ color: "rgb(24, 119, 242)"}} /> Back-End
                            </Col>
                            <Col className="icon-dropdown">
                                <IoIosArrowDropdown style={{ color: "rgb(24, 119, 242)"}} className="drop-be" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="stack-name">
                                NodeJS (Express)
                            </Col>
                            <Col className="stack-level">
                                Advanced
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={75} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Graphql
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={60} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Python (Flask)
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                PHP
                            </Col>
                            <Col className="stack-level">
                                Basic
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={25} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                C/C++
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Arduino IDE / PlatformIO
                            </Col>
                            <Col className="stack-level">
                                Advanced
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={75} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Docker / Docker Compose / YAML
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Linux (Ubuntu/Raspbian)
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Node-Red
                            </Col>
                            <Col className="stack-level">
                                Advanced
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={75} />
                            </Col>
                        </Row>
                    </div>
                    {/* <div className="header-skill">
                        <Row>
                            <Col className="db-title">
                                <AiOutlineDatabase style={{ color: "rgb(24, 119, 242)"}} /> Database
                            </Col>
                            <Col className="icon-dropdown">
                                <IoIosArrowDropdown style={{ color: "rgb(24, 119, 242)"}} className="drop-db" />
                            </Col>
                        </Row>
                    </div> */}
                    <div className="stack-container">
                        <Row>
                            <Col className="db-title">
                                <AiOutlineDatabase style={{ color: "rgb(24, 119, 242)"}} /> Database
                            </Col>
                            <Col className="icon-dropdown">
                                <IoIosArrowDropdown style={{ color: "rgb(24, 119, 242)"}} className="drop-db" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="stack-name">
                                PostgreSQL
                            </Col>
                            <Col className="stack-level">
                                Advanced
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={75} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                SQLite
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                mySQL
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                MongoDB
                            </Col>
                            <Col className="stack-level">
                                Advanced
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={75} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Firebase Real-Time DB
                            </Col>
                            <Col className="stack-level">
                                Advanced
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={75} />
                            </Col>
                        </Row>
                    </div>
                    <div className="stack-container">
                        <Row>
                            <Col className="db-title">
                                <AiOutlineDatabase style={{ color: "rgb(24, 119, 242)"}} /> Tooling
                            </Col>
                            <Col className="icon-dropdown">
                                <IoIosArrowDropdown style={{ color: "rgb(24, 119, 242)"}} className="drop-db" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="stack-name">
                                Git
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={65} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Hasura
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={60} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Postman
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={65} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                RapidMiner
                            </Col>
                            <Col className="stack-level">
                                Basic
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={30} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                Kubectl
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={50} />
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col className="stack-name">
                                MS Office
                            </Col>
                            <Col className="stack-level">
                                Intermediated
                            </Col>
                        </Row>
                        <Row>
                            <Col className="level-bar">
                                <ProgressBar animated now={60} />
                            </Col>
                        </Row>
                    </div>
            </Container>
        </div>
    )
};

export default Skill;