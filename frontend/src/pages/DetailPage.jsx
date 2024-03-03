import { useState } from "react";

// import components
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Nav, Container, Row, Col, Button, Modal, Form, FormLabel, ModalHeader } from "react-bootstrap";


const DetailPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <NavbarComp />

            <div id="detail" className="mt-3">
                <Container>
                    <Nav aria-label="breadcrumb" data-bs-theme="dark">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Resident Evil Village
                            </li>
                        </ol>
                    </Nav>

                    <Row>
                        <Col lg={4}>
                            <img src="../src/assets/image8.png" alt="" />
                        </Col>
                        <Col lg={8}>
                            <h1>Resident Evil Village</h1>
                            <h2 className="cost mb-3">IDR 200.000</h2>
                            <h6>about game</h6>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                                repellendus at officiis minus culpa maxime voluptate porro, vel
                                similique ad architecto totam accusamus esse! Laudantium esse
                                saepe dolorem maiores doloremque!
                            </p>
                            <h6 className="mt-3">Spec Requirement</h6>
                            <p><b>Reccommended :</b></p>
                            <table>
                                <tr>
                                    <th>Os</th>
                                    <th>Proccessor</th>
                                    <th>Memory</th>
                                    <th>Graphic</th>
                                </tr>

                                <tr>
                                    <td>Windows 10</td>
                                    <td>Intel Core i5 / AMD Ryzen 5</td>
                                    <td>16 GB RAM</td>
                                    <td>AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070</td>
                                </tr>
                            </table>
                            <p className="mt-3"><b>Minimum :</b></p>
                            <table>
                                <tr>
                                    <th>Os</th>
                                    <th>Proccessor</th>
                                    <th>Memory</th>
                                    <th>Graphic</th>
                                </tr>
                                <tr>
                                    <td>Windows 10</td>
                                    <td>Intel Core i3 / AMD Ryzen 3</td>
                                    <td>8 GB RAM</td>
                                    <td>Intel UHD Graphic 620 / AMD Radeon Graphic R9</td>
                                </tr>
                            </table>

                            <div className="trigger mt-5">
                                <Row>
                                    <Col lg={8}>
                                        <Button variant="primary" onClick={handleShow} className="btn buy">
                                            Buy Now!
                                        </Button>
                                    </Col>
                                    <Col lg={4}>
                                        <Button variant="outline-light" onClick={handleShow} className="btn btn-outline-light">
                                            Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </div>

                            <Modal show={show} onHide={handleClose} size="md" centered data-bs-theme="dark">
                                <div className="modal-content bg-dark" style={{ padding: '30px',}}>
                                    <Modal.Body className="bg-dark">
                                        <ModalHeader closeButton style={{ borderBottom: 'none', }}></ModalHeader>
                                        <h5>Login</h5>
                                        <p className="text-secondary mb-5">
                                            Login to download this game
                                        </p>

                                        <Form>
                                            <FormLabel for="username">Username</FormLabel>
                                            <Form.Control type="text" className="mb-3" placeholder="input username" />
                                            <FormLabel for="password">Password</FormLabel>
                                            <Form.Control type="password" placeholder="input password" />
                                            <a href="/AboutPage" className="d-flex justify-content-end mt-3">Forgot password?</a>
                                        </Form>

                                        <Button href="/OrderPage" className="mt-5 mb-5" style={{ backgroundColor: '#a555ed', width: '50%', margin: 'auto', display: 'flex', justifyContent: 'center' }}>Login</Button>
                                        <p className="d-flex justify-content-center">
                                            Don't have an account?
                                            <a href="/SignupPage">Sign Up</a>
                                        </p>
                                    </Modal.Body>
                                </div>
                            </Modal>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col>
                            <h5>Game Trailer</h5>
                            <iframe style={{ borderRadius: '20px', width: '100%', height: '500px' }}
                                src="https://www.youtube.com/embed/dRpXEc-EJow?si=nGEhQvwhV0hq0hlH" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
}

export default DetailPage;