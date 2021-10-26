import { React, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import notFoundLogo from '../assets/img/not-found.gif';
import '../assets/css/not-found.css';

const NotFound = () => (
    <Fragment>
        <Row className="justify-content-md-center">
            <Col xs={12} sm={4} md={4}/>
            <Col xs={12} sm={12} md={4}>
                <img className="d-inline-block align-top" alt="" src={notFoundLogo} width="498" height="480"/>
            </Col>
            <Col xs={12} sm={3} md={4}/>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
            <Col xs={12} sm={12} md={12}>
                <h3 style={{textAlign: "center"}}>{"You seemed to be a little lost. Page Not Found 404"}</h3>
            </Col>
        </Row>
    </Fragment>
)

export default NotFound;
