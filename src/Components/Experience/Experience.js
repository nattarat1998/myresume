import React from 'react';
import './Experience.css';
import {
    Container,
    Row,
    Col,
    Carousel,
    Button
} from 'react-bootstrap';
import iot_sensor_1 from '../../Images/iot-sensor.jpg';
import iot_sensor_2 from '../../Images/iot-sensor2.jpg';
import weather_station from '../../Images/weather-station-weewx.jpeg';
import esp_mesh from '../../Images/esp-mesh.png';
import simple_chatbot from '../../Images/simple-chatbot.jpg';
import oauth_github from '../../Images/oauth-github.jpg';
import web_ble from '../../Images/web-ble.jpg';
import tft from '../../Images/tft.jpg';
import doorlock from '../../Images/doorlock.jpg';
import doorlock_bot from '../../Images/doorlock-bot.jpg';
import nodered from '../../Images/node-red.png';
import durian_web from '../../Images/durian-web.jpg';

const Experience = () => {
    return (
        <div className="container">
            <Container className="container-exp">
                <Row>
                    <Col className="exp-title">
                        Experience
                    </Col>
                </Row>
                <Row>
                    <Col className="exp-subtitle">
                        Certificated and Projects
                    </Col>
                </Row>
            </Container>
            <Container className="container-exp-carousel">
                <Carousel variant='dark' className='carousel-group'>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={iot_sensor_2}
                                    alt="first slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">IoT Sensor </h5>
                                <p className="subtitle-carousel">Soil moisture sensor and pH sensor</p>
                                <p className="carousel-detail">Developed IoT Sensor(citizen grade) for <u>smart farm</u> by using Arduino IDE based on C/C++ language. Record value of electrical conductivity and find the suitable equation for soil moisture and pH calculation with <u>RapidMiner</u>. <u>NETPIE IoT Platform</u> is used to monitor and store value of sensor. </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={weather_station}
                                    alt="second slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">IoT Sensor</h5>
                                <p className="subtitle-carousel">Weather station with web server</p>
                                <p className="carousel-detail">Developed web server on <u>Raspberry Pi</u> to connect to the <u>weather station</u> with weewx driver. Display data on <u>IoT Platform</u></p>
                                <Button href="https://nuttharut-1998.medium.com/%E0%B8%A1%E0%B8%B2%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-weewx-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B1%E0%B8%9A-weather-station-%E0%B9%80%E0%B9%80%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%9C%E0%B8%A5%E0%B8%9A%E0%B8%99-dashboard-%E0%B8%82%E0%B8%AD%E0%B8%87-netpie-2020-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-369d9f2f7a72" target="_blank" variant="outline-primary" className="btn-article-pj-2">My article for this project</Button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={esp_mesh}
                                    alt="third slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">ESP MESH NETWORK</h5>
                                <p className="subtitle-carousel">Ad-hoc Network</p>
                                <p className="carousel-detail">Developed <u>ESP Mesh network</u> using Board ESP32 and Arduino IDE. The work flow is started at many child nodes with sensors send value to one parant node. Second,parent node switch to <u>MQTT protocol</u> for send all data to <u>IoT Platform</u></p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={simple_chatbot}
                                    alt="fourth slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">Simple Chatbot with pronunciation</h5>
                                <p className="subtitle-carousel">Stack used : HTML/CSS/JS</p>
                                <p className="carousel-detail">Simple chatbot which can make the constant dialogue and sound pronunciation.</p>
                                <Button href="https://chatbot-version-demo.herokuapp.com/" target="_blank" variant="outline-primary" className='btn-visit-bot-website'>Visit Website</Button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={oauth_github}
                                    alt="fifth slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">Open Authentication via Gibhub </h5>
                                <p className="subtitle-carousel">Stack used : NodeJS/HTML/CSS</p>
                                <p className="carousel-detail">Login system with <u>Github OAuth server</u> using CLIENT_ID and CLIENT_SECRET</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={web_ble}
                                    alt="sixth slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">Web Bluetooth API</h5>
                                <p className="subtitle-carousel">Stack used : HTML/JS</p>
                                <p className="carousel-detail">Demo web service used to get characteristics of <u>BLE service</u> such as battery level of mobile.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={tft}
                                    alt="seventh slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">TFT-monitoring-sensor</h5>
                                <p className="subtitle-carousel">Stack used : C/C++/Arduino IDE</p>
                                <p className="carousel-detail">Developed <u>TFT module</u> to display the value of sensor using <u>Arduino IDE(C++) and TFT library(C)</u></p>
                                <Button href="https://github.com/nattarat1998/tft-display-sensor-smartfarm" target="_blank" variant="outline-primary" className='btn-visit-bot-website'>Project Repo</Button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={doorlock}
                                    alt="eighth slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">Doorlock API Proxy Gateway</h5>
                                <p className="subtitle-carousel">Stack used : NodeJS Express</p>
                                <p className="carousel-detail">Gatewat doorlock receive commands from bothook server using <u>Express as middleware</u>. Gateway connect to <u>TTLOCK</u> device with <u>TTLOCK API</u>.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={doorlock_bot}
                                    alt="nineth slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">Doorlock Bothook Server</h5>
                                <p className="subtitle-carousel">Stack used : NodeJS (HTTP/MQTT)</p>
                                <p className="carousel-detail">Webhook bot server is used for listen event or action from user to send commands to <u>doorlock api proxy gateway</u>.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={nodered}
                                    alt="first slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">Node Red Module Cloud Alert Ticket</h5>
                                <p className="subtitle-carousel">Stack used : HTML/CSS/JS/Node-Red</p>
                                <p className="carousel-detail">Developed node module for <u>cloud alert ticket management</u>. This node module using<u>HTTP request</u> module as background</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-content-grid">
                            <div className="img-carousel-container">
                                <img
                                    className="img-carousel-slide"
                                    src={durian_web}
                                    alt="first slide"
                                />
                            </div>
                            <div className="carousel-detail">
                                <h5 className="title-carousel">Farm Tracking and Management App</h5>
                                <p className="subtitle-carousel">Stack used : ReactJS with Redux / NodeJS Express / PostgreSQL / Firebase Real-Time Database</p>
                                <p className="carousel-detail">Developed responsive web application for use in durian farm with many features such as record task, durian in farm, to do list, disease, etc.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
};

export default Experience;