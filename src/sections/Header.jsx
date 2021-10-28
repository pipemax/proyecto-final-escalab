import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../assets/css/bootstrap.min.css';

/* Bootstrap Components */
import { Nav, Navbar, Container, Button, Modal } from 'react-bootstrap';
import NavItemComponent from '../components/Nav/NavItem';
import FormLogin from '../components/FormLogin';

/* State Login de Redux*/
import { useSelector, useDispatch } from 'react-redux'; 
import { logOut, logged } from '../features/loginSlice';
import useModal from '../custom-hooks/useModal';
import propTypes from "prop-types";

const Header = ({ mainPage, routes }) => {  
    const { modal, handleCloseModal, handleOpenModal } = useModal();
    const loggedStatus  = useSelector(logged);
    const dispatch      = useDispatch();

    const handleLogOut = () => {        
        dispatch(logOut());
    }

    return (
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
                            routes.filter(element => element.visible).map((route) => <NavItemComponent path= {route.path} text= {route.text} key= {route.path}/>)
                        }
                        </Nav>
                    </Navbar.Collapse>
                    { !loggedStatus ? 
                        <Button variant= 'primary' onClick={handleOpenModal}>
                            Iniciar Sesión
                        </Button>
                        :
                        <Button variant= 'danger' onClick={handleLogOut}>
                            Cerrar Sesión 
                        </Button>
                    }
                </Container>     
                <Modal show={modal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {"Inicio de Sesión"}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                            
                        <FormLogin onHide={handleCloseModal}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>          
            </Navbar>           
        </Fragment>
    )
}

Header.propTypes = {
    mainPage: propTypes.string,
    routes: propTypes.array
};

export default Header;
