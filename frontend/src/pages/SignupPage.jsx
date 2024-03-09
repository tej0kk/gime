import { Container, Col, Row, FormControl, FormLabel, Form, Button, Alert } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [errorFullname, setErrorFullname] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const navigate = useNavigate();

    const register = async (e) => 
    {   
        e.preventDefault();
        if (fullname.length < 8) {
            setErrorFullname('Silahkan masukkan nama anda !');
            return;
        } 
        else if (username.length < 8) {
            setErrorUsername('Silahkan masukkan nama pengguna anda !');
            return;
        }
        else if (email.length < 8) {
            setErrorEmail('Silahkan masukkan email anda !');
            return;
        }
        else if (phone.length < 11) {
            setErrorPhone('Silahkan masukkan nomor HP anda !');
            return;
        }
        else if (password.length < 8) {
            setErrorPassword('Silahkan masukkan password anda !');
            return;
        }
        else if (confirmPassword.length < 8) {
            setErrorConfirmPassword('Silahkan masukkan password anda !');
            return;
        }
        else if (confirmPassword != password) {
            setErrorConfirmPassword('Konfirmasi password tidak sesuai !');
            return;
        }
        try {
            const data = {
                fullName: fullname,
                username: username,
                email: email,
                phone: phone,
                password: password,
                confirmPassword: confirmPassword
            };
            await axios.post('http://127.0.0.1:3000/api/register', data);
            navigate('/loginpage');
        } catch (error) {
            console.log(error.response.message);
        }
    }

    const alert = () => 
    {
        if (fullname.length < 8) {
            return (
                <Alert variant="danger">
                    {errorFullname}
                </Alert>
            );
        }else if (username.length < 8) {
            return (
                <Alert variant="danger">
                    {errorUsername}
                </Alert>
            );
        }else if (phone.length < 11) {
            return (
                <Alert variant="danger">
                    {errorPhone}
                </Alert>
            );
        }else if (email.length < 8) {
            return (
                <Alert variant="danger">
                    {errorEmail}
                </Alert>
            );
        }else if (password.length < 8) {
            return (
                <Alert variant="danger">
                    {errorPassword}
                </Alert>
            );
        }else if (confirmPassword.length < 8) {
            return (
                <Alert variant="danger">
                    {errorConfirmPassword}
                </Alert>
            );
        }else if (confirmPassword != password) {
            return (
                <Alert variant="danger">
                    {errorConfirmPassword}
                </Alert>
            );
        }
    }
    

    return (
        <div>
            <NavbarComp />
            <div id="signup">
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <div className="bg-signup bg-dark" data-bs-theme="dark">
                                <h5>Sign Up</h5>
                                <p>Make an account to find the joy!</p>
                                <Row>
                                    {alert()}
                                </Row>
                                <Form onSubmit={register}>
                                    <Row>
                                        <Col lg={6}>
                                            <FormLabel htmlFor="fullname"><b>Fullname</b></FormLabel>
                                            <FormControl type="text" className="mb-3" data-bs-theme="dark" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                        </Col>
                                        <Col lg={6}>
                                            <FormLabel htmlFor="username"><b>Username</b></FormLabel>
                                            <FormControl type="text" className="mb-3" data-bs-theme="dark" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <FormLabel htmlFor="Email"><b>Email</b></FormLabel>
                                            <FormControl type="text" className="mb-3" data-bs-theme="dark" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        </Col>
                                        <Col lg={6}>
                                            <FormLabel htmlFor="phone"><b>Phone Number</b></FormLabel>
                                            <FormControl type="text" className="mb-3" data-bs-theme="dark" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <FormLabel htmlFor="password"><b>Make a password</b></FormLabel>
                                            <FormControl type="password" className="mb-3" data-bs-theme="dark" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        </Col>
                                        <Col lg={6}>
                                            <FormLabel htmlFor="confirm-password"><b>Confirm Password</b></FormLabel>
                                            <FormControl type="password" className="mb-3" data-bs-theme="dark" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Button type="submit" className="btn d-flex justify-content-center mt-5">Signup</Button>
                                    </Row>
                                </Form>
                                <p className="d-flex justify-content-center mt-5">Don't have an account? <a href="/loginpage">Login</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default SignupPage;