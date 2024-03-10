import Footer from "../components/Footer";

import { Container, Row, Col, Breadcrumb, Card, CardBody, Form, FormLabel, FormControl, FormCheck, Button } from "react-bootstrap"
import NavComp from "../components/NavComp";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const OrderPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [dataPayment, setDataPayment] = useState([]);
    const [user, setUser] = useState([]);
    const [paymentId, setPaymentId] = useState('');

    useEffect(() => {
        getData();
        getUser();
        getPayment();
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/game/' + id);
            setData(await response.data.game);
        } catch (error) {
            console.log(error.message);
        }
    }

    const getUser = () => {
        const decode = jwtDecode(localStorage.getItem('token'));
        setUser(decode);
        // console.log(decode);
    }

    const getPayment = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/payment-method/');
            setDataPayment(await response.data.payment);
        } catch (error) {
            console.log(error.message);
        }
    }

    const postBilling = async (e) => {
        e.preventDefault();
        try {
            const body = {
                gameId: data._id,
                userId: user.userId,
                paymentId: paymentId
            }
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            const response = await axios.post('http://127.0.0.1:3000/api/billing', body, config);
            console.log(response.data.message);
            if (response.data.message == 'Terima Kasih, Silahkan lakukan pembayaran !')
            {
                navigate('/confirmpage')
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handlerSelect = (e) => {
        setPaymentId(e.target.value);
    }

    return (
        <div>
            <NavComp/>
            <div id="order" className="mt-3">
                <Container>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item href={`/detailpage/${id}`}>{ data.name }</Breadcrumb.Item>
                        <Breadcrumb.Item active>Billing Information</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row>
                        <Col>
                            <Card className="mb-4" data-bs-theme="dark" bg="dark">
                                <Row className="g-0">
                                    <Col md={4}>
                                        <img src={`http://127.0.0.1:3000/images/${data.cover}`} className="img-fluid" alt="..." style={{ width: '100%', borderRadius: '20px' }} />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <h4 className="card-title"><b>{ data.name }</b></h4>
                                            <p className="card-text"><small className="text-secondary">Cost :</small>
                                                <h5><b>IDR { data.price }</b></h5>
                                            </p>
                                            <hr />
                                            <Form onSubmit={postBilling}>
                                                <Row className="mt-4 mb-4">
                                                    <h5 className="text-secondary">Buyer Information</h5>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <FormLabel htmlFor="Full Name">Username</FormLabel>
                                                                <FormControl type="text" value={user.username}
                                                                    aria-label="Full Name" readOnly/>
                                                            </Col>
                                                        </Row>
                                                </Row>
                                                <hr />
                                                <h5 className="text-secondary">Payment Method</h5>
                                                {/* <Row className="mb-5">
                                                    <Col lg={12}> */}
                                                        <Form.Select onChange={handlerSelect}>
                                                            <option value="">Choose One</option>
                                                            {
                                                                dataPayment.map((data, index) => (
                                                                    <option key={index} value={data._id}>{data.name}</option>
                                                                ))
                                                            }
                                                        </Form.Select>
                                                    {/* </Col>
                                                </Row> */}

                                                <Button type="submit" className="btn mt-2 mb-1 w-100">Continue</Button>
                                                <a>
                                                    <small className="text-secondary">*Please ensure the data entered is correct before
                                                        clicking the 'continue' button.</small>
                                                </a>
                                            </Form>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div >
    );
}

export default OrderPage;