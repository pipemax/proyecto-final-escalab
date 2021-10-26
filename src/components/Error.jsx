import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import errorPhoto from '../assets/img/imagen_error.png';

const ErrorComponent = () => {
    return (
        <Fragment>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={3} md={3}/>
                <Col xs={12} sm={12} md={6}>
                    <img alt="" src={errorPhoto} width="600" height="480" style={{display: 'block', margin: '0 auto'}}/>
                </Col>
                <Col xs={12} sm={3} md={3}/>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={12}>
                    <h3 style={{textAlign: "center"}}>{"Damn!, an internal horror has occured, we are sorry :("}</h3>
                </Col>
            </Row>
    </Fragment>
    )
}

export default ErrorComponent;
