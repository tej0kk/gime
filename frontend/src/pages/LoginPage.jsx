import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Col, Container, Form, FormControl, FormLabel, Row, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const masuk = async (e) => 
    {
        e.preventDefault();
        try {
            const data = {
                username: username,
                password: password,
            };
            const res = await axios.post('http://127.0.0.1:3000/api/login', data);
            const decode = jwtDecode(res.data.token);
            console.log(decode);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message);
            }
        }
    }

    const alert = () => 
    {
        if (msg != '')
        {
            return (
                <Alert variant="danger">
                    {msg}
                </Alert>
            );
        }
    }

    return (
        <div id="login">
            <NavbarComp />
            <Container className="d-flex justify-content-center mt-5">
                <Row>
                    <Col>
                        <div className="bg-login bg-dark" data-bs-theme="dark">
                            <h5>Login</h5>
                            <p>Login to feel the joy!</p>
                            <Row className="mt-5">
                                {alert()}
                            </Row>
                            <Form onSubmit={masuk} className="mt-2">
                                <Row>
                                    <FormLabel htmlFor="username"><b>Username</b></FormLabel>
                                    <FormControl type="text" className="mb-3" data-bs-theme="dark" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                </Row>
                                <Row>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <FormControl type="password" className="mb-3" data-bs-theme="dark" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </Row>
                                <Row>
                                    <Button type="submit" className="btn d-flex justify-content-center mt-5">Login</Button>
                                </Row>
                                <p className="d-flex justify-content-center mt-5">Don't have an account? <a href="/signuppage">Signup</a>
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default LoginPage;