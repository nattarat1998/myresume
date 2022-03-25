import React from 'react';
import './Qualification.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Qualification = () => {
    return (
        <div className="container">
            <Container className="container-timeline">
                <Row>
                    <Col className="qualification-title">
                        Qualification
                    </Col>
                </Row>
                <Row>
                    <Col className="qualification-subtitle">
                        My Personal Timeline
                    </Col>
                </Row>
            </Container>
            <Container className="container-educational-bg">
                <Row>
                    <Col className="column-edu-title">
                        Timeline
                    </Col>
                </Row>
                <Row>
                    <Col className="column-item-timeline">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ color: '#333' }}
                                contentArrowStyle={{ borderRight: '10px solid  rgb(24, 119, 242)' }}
                                date="JUL 2020 - Present"
                                iconStyle={{ background: 'rgb(24, 119, 242)', color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">Internet Thailand Public Company Limited</h3>
                                <h4 className="vertical-timeline-element-subtitle">IoT and Web Developer</h4>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ color: '#333' }}
                                contentArrowStyle={{ borderRight: '10px solid  rgb(24, 119, 242)' }}
                                date="JUN 2020"
                                iconStyle={{ background: 'rgb(24, 119, 242)', color: '#fff' }}
                            >
                                <h3 className="vertical-timeline-element-title">King Mongkut's Institute of Technology Ladkrabang</h3>
                                <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree of agricultural engineering</h4>
                                <p>
                                    GPA 2.96
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{ borderRight: '10px solid  rgb(24, 119, 242)' }}
                                date="JUN 2019 - DEC 2019"
                                iconStyle={{ background: 'rgb(24, 119, 242)', color: '#fff' }}
                                // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Internet Thailand Public Company Limited</h3>
                                <h4 className="vertical-timeline-element-subtitle">IoT intership and Co-operative Education</h4>
                                <p>
                                    IoT Trainee
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{ borderRight: '10px solid  rgb(24, 119, 242)' }}
                                date="AUG 2016"
                                iconStyle={{ background: 'rgb(24, 119, 242)', color: '#fff' }}
                                // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">King Mongkut's Institute of Technology Ladkrabang</h3>
                                <h4 className="vertical-timeline-element-subtitle">Department of Agricultural engineering</h4>
                                <p>
                                    
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{ borderRight: '10px solid  rgb(24, 119, 242)' }}
                                date="2010 - 2016"
                                iconStyle={{ background: 'rgb(24, 119, 242)', color: '#fff' }}
                                // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Phichit Pittayakom School</h3>
                                <h4 className="vertical-timeline-element-subtitle">SMAT Programme</h4>
                                <p>
                                    GPA 3.03
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Qualification;