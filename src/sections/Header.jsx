import { React, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../assets/css/bootstrap.min.css';

/* Bootstrap Components */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavItemComponent from '../components/Nav/NavItem';
import Button from 'react-bootstrap/Button';

const Header = ({ mainPage, routes }) => (
    <Fragment>            
        <Navbar bg= "dark" variant= "dark" expand="lg" fixed="top" style={{position: "sticky"}}>
            <Container>
                <Navbar.Brand as={Link} to={mainPage}>
                    <img className="d-inline-block align-top" alt="" src={logo} width="60" height="30"/>
                    {` Movies and Series Database`}
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto" defaultActiveKey={mainPage}>
                    {
                        routes.map((route) => <NavItemComponent path= {route.path} text= {route.text} />)
                    }
                    </Nav>
                </Navbar.Collapse>
                <Button variant= 'primary'>
                    Login
                </Button>
            </Container>                
        </Navbar>           
    </Fragment>
)

export default Header;
