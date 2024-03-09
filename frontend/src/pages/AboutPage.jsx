import { Col, Container, Row, Accordion } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import axios from 'axios';
import { useEffect, useState } from 'react';

const AboutPage = () => {
    const [datasAbout, setDatasAbout] = useState([]);
    const [datasFaq, setDatasFaq] = useState([]);

    const getDataFaq = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/faq');
            setDatasFaq(await response.data.faq);
            // console.log(response.data.faq);
        } catch (error) {
            console.log(error.message);
        }
    }

    const getDataAbout = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/about');
            setDatasAbout(await response.data.about);
            // console.log(datasAbout);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getDataAbout();
        getDataFaq();
    }, []);

    return (
        <div>
            <NavbarComp />
            <div id="about">
                <Container className="mt-3">
                    <Row>
                        <Col>
                            <div className="bio">
                                <h1><b>about gime</b></h1>
                                <hr />
                                <h5><b>{datasAbout.corporateName}</b></h5>
                                <h6><b>{ datasAbout.location }</b></h6>
                                <p>
                                    {datasAbout.description}
                                </p>
                            </div>
                            <div className="contact">
                                <hr />
                                <h5><b>Contact</b></h5>
                                <h6><b>Gime Inc</b></h6>
                                <p>{datasAbout.address}, Tel {datasAbout.phone }</p>
                            </div>
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                        <div className="faq">
                                <hr />
                                <h5><b>Frequently Ask Question</b></h5>

                                <Accordion defaultActiveKey="0" bg="dark" data-bs-theme="dark" className="mt-3">
                                    {
                                        datasFaq.map((dataFaq, index) => (
                                            <Accordion.Item key={index} eventKey={index}>
                                                <Accordion.Header>{dataFaq.question }</Accordion.Header>
                                                <Accordion.Body>
                                                    {dataFaq.answer}
                                                </Accordion.Body>
                                            </Accordion.Item>           
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    );
}

export default AboutPage;