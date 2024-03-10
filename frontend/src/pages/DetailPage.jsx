import { useEffect, useState } from "react";

// import components
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Nav, Container, Row, Col, Button, Modal, Form, FormLabel, ModalHeader } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const DetailPage = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [specification, setSpecification] = useState([]);
    const { id } = useParams();
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (localStorage.getItem('token')) {
            navigate('/orderpage/' + id)
        } else {
            setShow(true);
        }
    }


    useEffect(() => {
        // localStorage.removeItem('token');
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/game/' + id);
            // console.log(response.data.game);
            setData(await response.data.game);
            setSpecification(await response.data.game.specificationId);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <NavbarComp />

            <div id="detail" className="mt-3">
                <Container>
                    <Nav aria-label="breadcrumb" data-bs-theme="dark">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {data.name}
                            </li>
                        </ol>
                    </Nav>

                    <Row>
                        <Col lg={4}>
                            <img src={`http://127.0.0.1:3000/images/${data.cover}`} alt="" />
                        </Col>
                        <Col lg={8}>
                            <h1>{data.name}</h1>
                            <h2 className="cost mb-3">IDR { data.price }</h2>
                            <h6>about game</h6>
                            <p>
                                { data.description }
                            </p>
                            <h6 className="mt-3">Spec Requirement</h6>
                            {
                                specification.map((spec, index) => (
                                    <div key={index}>
                                        { (spec.category == 'req') && <p><b>Recommended : </b></p> }
                                        { (spec.category == 'min') && <p><b>Minimum : </b></p> }
                                        <table className="mb-3">
                                            <thead>
                                                <tr>
                                                    <th>Os</th>
                                                    <th>Proccessor</th>
                                                    <th>Memory</th>
                                                    <th>Graphic</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{ spec.os }</td>
                                                    <td>{ spec.processor }</td>
                                                    <td>{ spec.memory } GB RAM</td>
                                                    <td>{ spec.graphic }</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                ))
                            }

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
                                src={`https://youtube.be/embed/${data.trailer}`} title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
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