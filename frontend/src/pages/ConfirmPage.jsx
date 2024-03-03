import Footer from "../components/Footer";

import { Container, Row, Col, Breadcrumb, Card, CardBody, Form, FormLabel} from "react-bootstrap"
import NavComp from "../components/NavComp";

const ConfirmPage = () => {
    return (
        <div>
            <NavComp/>
            <div id="confirm" className="mt-3">
                <Container>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item href="/DetailPage">Resident Evil Village</Breadcrumb.Item>
                        <Breadcrumb.Item href="/OrderPage">Billing Information</Breadcrumb.Item>
                        <Breadcrumb.Item active>Confirm Payment</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row>
                        <Col>
                            <Card className="mb-4" data-bs-theme="dark" bg="dark">
                                <Row className="g-0">
                                    <Col md={4}>
                                        <img src="../src/assets/image8.png" class="img-fluid" alt="..." style={{ width: '100%', borderRadius: '20px' }} />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <h4 className="card-title"><b>Resident Evil Village</b></h4>
                                            <p className="card-text"><small className="text-secondary">Cost :</small>
                                                <h5><b>IDR 200.000</b></h5>
                                            </p>
                                            <hr />
                                            <Row className="mt-4 mb-4">
                                                <h5 className="text-secondary">Buyer Information</h5>
                                                <Form>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <FormLabel for="Full Name">Full Name</FormLabel>
                                                            <h5 className="buyer-name mt-3">Jhon Doe</h5>

                                                        </Col>
                                                        <Col lg={6}>
                                                            <FormLabel for="Phone Number">Phone Number</FormLabel>
                                                            <h5 className="buyer-phone mt-3">081234567890</h5>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Row>
                                            <hr />
                                            <h5 className="text-secondary">Payment Method</h5>
                                            <h5 className="payment-method mt-3">Gopay</h5>

                                            <a href="/ScanPage"
                                                className="btn btn-outline-light mt-2 mb-1 w-100">Continue</a>
                                            <a><small className="text-secondary">*Please ensure the data entered is correct before
                                                clicking the 'continue' button.</small></a>
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

export default ConfirmPage;