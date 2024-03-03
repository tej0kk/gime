import Footer from "../components/Footer";
import NavComp from "../components/NavComp";

import { Nav, Container, Card, CardBody, Row, Col } from "react-bootstrap";
const CartPage = () => {
    return (
        <div>
            <NavComp />
            <div id="cart" className="mt-5">
                <Container>
                    <Nav aria-label="breadcrumb" data-bs-theme="dark">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Cart
                            </li>
                        </ol>
                    </Nav>

                    <Row>
                        <Col lg={2}>
                            <Card className="text-center" bg="dark" data-bs-theme="dark">
                                <img src="../src/assets/image8.png" className="card-img-top" alt="..."/>
                                    <CardBody>
                                        <a href="/DetailPage" className="card-title">
                                            <h6>Resident Evil : Village</h6>
                                        </a>
                                        <h5 className="cost">IDR 200.000</h5>
                                        <a href="/OrderPage" class="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                        <a href="#" className="text-danger">
                                            <p className="text-danger">Delete</p>
                                        </a>
                                    </CardBody>
                            </Card>
                        </Col>

                        <Col lg={2}>
                            <Card className="text-center" bg="dark" data-bs-theme="dark">
                                <img src="../src/assets/image7.png" className="card-img-top" alt="..."/>
                                    <CardBody>
                                        <a href="/DetailPage" className="card-title">
                                            <h6>Ghost Of Tsushima</h6>
                                        </a>
                                        <h5 className="cost">IDR 200.000</h5>
                                        <a href="/OrderPage" class="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                        <a href="#" className="text-danger">
                                            <p className="text-danger">Delete</p>
                                        </a>
                                    </CardBody>
                            </Card>
                        </Col>

                        <Col lg={2}>
                            <Card className="text-center" bg="dark" data-bs-theme="dark">
                                <img src="../src/assets/image9.png" className="card-img-top" alt="..."/>
                                    <CardBody>
                                        <a href="/DetailPage" className="card-title">
                                            <h6>APEX Legends</h6>
                                        </a>
                                        <h5 className="cost">IDR 200.000</h5>
                                        <a href="/OrderPage" class="btn btn-outline-light mt-3 mb-3">Check Out</a>
                                        <a href="#" className="text-danger">
                                            <p className="text-danger">Delete</p>
                                        </a>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;