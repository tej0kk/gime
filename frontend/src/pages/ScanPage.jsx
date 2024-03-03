import Footer from "../components/Footer";
import { Icon } from '@iconify/react';

import { Container, Row, Col, Breadcrumb, Card, CardBody, Form, FormLabel } from "react-bootstrap"
import NavComp from "../components/NavComp";

const ScanPage = () => {
    return (
        <div>
            <NavComp/>
            <div id="scan" className="mt-3">
                <Container>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item href="/DetailPage">Resident Evil Village</Breadcrumb.Item>
                        <Breadcrumb.Item active>Billing Information</Breadcrumb.Item>
                        <Breadcrumb.Item active>Confirm Payment</Breadcrumb.Item>
                        <Breadcrumb.Item active>Scan to Pay</Breadcrumb.Item>
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
                                            <Row>
                                                <Col lg={6} className="mt-2">
                                                    <h5 className="text-secondary">How to pay :</h5>
                                                    <ul>
                                                        <li>Open Gopay/OVO App</li>
                                                        <li>Click on <b>Pay</b> and scan qr code</li>
                                                        <li>If you choose payment via indomaret, you just need to take
                                                            screenshot of this qr code then
                                                            show it to cashier </li>
                                                        <li>You can click the <b>Done</b> button if you already paid</li>
                                                    </ul>
                                                </Col>
                                                <Col lg={3}>
                                                    <img className="qr-code mt-2" src="../src/assets/qr-code.png" alt="" />
                                                </Col>
                                                <Col lg={3} className="my-auto">
                                                    <a href="/SuccessPage" className="btn btn-outline-light w-100"><Icon icon="ph:check-bold" /> Done</a>
                                                </Col>
                                            </Row>
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

export default ScanPage;