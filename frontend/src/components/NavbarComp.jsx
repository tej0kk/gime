import logo from '../assets/logo.png';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const NavbarComp = () => {
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    });

    return (
        <>
            {status && (
                <Navbar expand="lg" bg='dark' data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/AboutPage">About</Nav.Link>
                            <Nav.Link href="/NewsPage">News</Nav.Link>
                            <div className="divider"></div>
                            <Nav.Link href="/CartPage"><Icon icon="solar:cart-check-linear" />
                                Cart</Nav.Link>
                            <Nav.Link href="/LibraryPage">Library</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            )}
            {!status && (
                <Navbar expand="lg" bg='dark' data-bs-theme="dark">
                    <Container fluid>
                        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/aboutpage">About</Nav.Link>
                            <Nav.Link href="/newspage">News</Nav.Link>
                            <Button href='/loginpage'>Login</Button>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
        </>
    );
}

export default NavbarComp;