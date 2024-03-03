import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

import { Container, Row, Col, CardBody, Card } from "react-bootstrap";

const NewsDetail = () => {
    return (
        <div>
            <NavbarComp />
            <div id="news-detail">
                <Container className="mt-3">
                    <Row>
                        <Col>
                            <div className="bg-news"></div>
                            <h1 className="news-title mt-5"><b>WORLDWIDE REVEAL: ANNOUNCING CALL OF DUTY: MODERN WARFARE III</b></h1>
                            <p class="text-secondary">Friday, 1 September 2023</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore quia minus eaque ex? Fugiat nostrum
                                sit incidunt saepe neque corporis vitae unde voluptatum! Distinctio, vel dolores. Sed, blanditiis temporibus
                                tenetur accusantium iure et ipsam dolores perspiciatis vero excepturi id maxime illo numquam ipsum expedita,
                                quidem rem. Nobis rem quidem, molestias quis fugit suscipit quod perspiciatis nostrum voluptatem reiciendis
                                natus.</p>

                        </Col>
                    </Row>

                    <div className="more-news mt-3">
                        <Row>
                            <h5><b>More News</b></h5>
                            <Col lg={6}>
                                <Card className="mt-3">
                                    <img src="../src/assets/image-news3.png" className="card-img-top" alt="..."/>
                                        <CardBody>
                                            <h6><small>Friday, 1 September 2023</small></h6>
                                            <a href="#" className="card-title">
                                                <h5>Resident Evil 4 PS5 Playthrough</h5>
                                            </a>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                                                eius nam nemo hic impedit ea commodi.</p>
                                        </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card className="mt-3">
                                    <img src="../src/assets/image-news4.png" className="card-img-top" alt="..."/>
                                        <CardBody>
                                            <h6><small>Friday, 1 September 2023</small></h6>
                                            <a href="#" className="card-title">
                                                <h5>Konami Apologizes for eFootball’s Disastrous Launch</h5>
                                            </a>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore recusandae optio ipsam, fugiat
                                                eius nam nemo hic impedit ea commodi.</p>
                                        </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default NewsDetail;