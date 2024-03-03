import { useState } from "react";

import Footer from "../components/Footer";
import NavComp from "../components/NavComp";

import { Container, Row, Col, Card, Modal, FormLabel, Button, FormControl, Form, CardBody } from 'react-bootstrap';

const LibraryPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <NavComp />
            <div id="account">
                <Container className="mt-5 mb-5">
                    <Row>
                        <Card bg="dark">
                            <Col>
                                <FormLabel class="subtitle" for="username">Username</FormLabel>
                                <h2 class="username"><b>Jhon_Doer2023</b></h2>
                                <FormLabel class="subtitle" for="fullname">Fullname</FormLabel>
                                <h5 class="fullname">Jhon Doe</h5>
                                <FormLabel class="subtitle" for="phone">Phone</FormLabel>
                                <p class="phone">0812345678</p>
                                <Button variant="btn btn-outline-light" onClick={handleShow}>
                                    Edit Info
                                </Button>
                                <Button href="./index.html" variant="btn text-danger">Sign Out</Button>

                                <Modal show={show} onHide={handleClose} centered data-bs-theme="dark">
                                    <Modal.Header closeButton className="bg-dark">
                                        <Modal.Title>Edit Info</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="bg-dark">
                                        <Form>
                                            <FormLabel class="subtitle mb-2" for="username">Username</FormLabel>
                                            <FormControl type="text" className="mb-2" placeholder="input username" />
                                            <FormLabel class="subtitle mb-2" for="fullname">Fullname</FormLabel>
                                            <FormControl type="text" className="mb-2" placeholder="input fullname" />
                                            <FormLabel class="subtitle mb-2" for="phone">Phone Number</FormLabel>
                                            <FormControl type="text" className="mb-2" placeholder="start with 08" />
                                            <FormLabel class="subtitle mb-2" for="password">Change Password</FormLabel>
                                            <FormControl type="password" className="mb-2" placeholder="change password" />
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer className="bg-dark">
                                        <Button variant="btn text-danger" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="btn btn-outline-light" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </Card>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <h5>Libraries</h5>
                    <Col lg={2}>
                        <Card className="text-center" bg="dark" data-bs-theme="dark">
                            <img src="../src/assets/image8.png" className="card-img-top" alt="..." />
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
                            <img src="../src/assets/image7.png" className="card-img-top" alt="..." />
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
                            <img src="../src/assets/image9.png" className="card-img-top" alt="..." />
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
            <Footer />
        </div>
    );
}

export default LibraryPage;