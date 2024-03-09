import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col, Form, Carousel, Image, Card } from 'react-bootstrap';

// import component
import NavbarComp from "../components/NavbarComp";
import Reccommended from '../components/Reccommended';
import Footer from '../components/Footer';
import FreeGame from '../components/FreeGame';
import OnSale from '../components/OnSale';

import axios from 'axios';

const Home = () => {
    const [activeKey, setActiveKey] = useState('discover');
    const [index, setIndex] = useState(0);
    const [datasCarousel, setDatasCarousel] = useState([]);
    const [datasFeature, setDatasFeature] = useState([]);

    useEffect(() => {
        getDataCarousel();
        getDataFeature();
    }, []);

    const getDataCarousel = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/carousel');
            setDatasCarousel(await response.data.carousel);
            // console.log(datas);
        } catch (error) {
            console.log(error.message);
        }
    }
    const getDataFeature = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/feature');
            setDatasFeature(await response.data.feature);
            // console.log(datas);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const handleCarouselSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const renderContent = () => {
        if (activeKey === "discover") {
            return (
                <div id='hero'>
                    <Row>
                        <Carousel className='mt-5' activeIndex={index} onSelect={handleCarouselSelect}>
                            {
                                datasCarousel.map((data, index) => (
                                    <Carousel.Item key={index}>
                                        <Image
                                            className="d-block w-100"
                                            src={`http://127.0.0.1:3000/images/${data.coverSlide}`}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h5><b>{data.title}</b></h5>
                                            <p>{data.description }</p>
                                            <a href="/DetailPage" className="btn btn-outline-light">Buy Now!</a>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Row>

                    <Row className='mt-5'>
                        <OnSale />
                    </Row>

                    <Row>
                        <Reccommended />
                    </Row>

                    <Row className='mt-5'>
                        {
                            datasFeature.map((data,index) => (
                                <Col key={index} lg={4}>
                                    <Card style={{ width: '100%' }} data-bs-theme="dark">
                                        <Card.Img variant="top" src={`http://127.0.0.1:3000/images/${data.image}`} className='card-image' />
                                        <Card.Body>
                                            <a href="/SalesPage">
                                                <h5 className="card-title">{ data.featureName }</h5>
                                            </a>
                                            <p className="card-text">
                                                {data.description}
                                            </p>
                                            <a href="./SalesPage">
                                                <h4>Browse</h4>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </Col>   
                            ))
                        }
                    </Row>
                </div>
            );
        } else if (activeKey === "popular") {
            return (
                <div id='hero'>
                    <Reccommended />

                    <Row>
                        <Col>
                            <Card className="mt-5 bg-dark" data-bs-theme="dark" style={{ width: '100%', borderRadius: '20px' }}>
                                <Row>
                                    <Col md={6}>
                                        <Card.Img variant="top" src="../src/assets/image-news.png" className='card-image' />
                                    </Col>
                                    <Col md={6}>
                                        <Card.Body>
                                            <h6 className="subtitle">popular news</h6>
                                            <h3 className="card-title"><b>Modern Warfare III Release Date</b></h3>
                                            <p className="card-text">Modern Warfare III is currently scheduled to release on Friday,
                                                November 10th, 2023. The game will release on the following platforms: PS4/5, Xbox X|S +
                                                Xbox One, PC, Battle.net, Steam. This all-new campaign continues the story immediately
                                                following the events of Modern Warfare II, with Makarov taking center stage and causing
                                                Task Force 141 to fight like never before. With a full-length story, you'll enjoy the
                                                usual cinematic firefights the series is known for, as well as brand new Open Combat
                                                Missions, giving players a more free-form experience than ever before.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                            <a href="/NewsDetail">
                                                <h5>Read More</h5>
                                            </a>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>


                    <h5 className='mt-5 mb-3'>Top Free Games</h5>
                    <FreeGame />
                </div>
            );
        }

        // Default content if activeKey doesn't match any condition
        return <div>No content available for this tab.</div>;
    };

    return (
        <div>
            <NavbarComp />
            <Container className="mt-3">
                <Row>
                    <Col lg={3}>
                        <Form>
                            <Form.Control type="search" className="form-control" placeholder="Search Game" data-bs-theme="dark" />
                        </Form>
                    </Col>
                    <Col lg={9}>
                        <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="discover">Discover</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="popular">Popular</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {activeKey === "discover" && renderContent()}
                        {activeKey === "popular" && renderContent()}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Home;
