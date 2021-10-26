import React, { useState, useEffect } from 'react';
import { Row, Col, Alert, Spinner, Card, Tabs, Tab, ListGroup } from 'react-bootstrap';
import useGetTitle from '../custom-hooks/useGetTitle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from "react-slick";
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../components/Error';
import propTypes from "prop-types";

const ItemDetails = ({ idTitle }) => {
    const { title, loading, error, getTitle } = useGetTitle();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    useEffect(() => {
        getTitle(idTitle);
    }, [idTitle]);

    return (
        <ErrorBoundary FallbackComponent={Error}>
            <Row>
                <Col xs={ 12 } md={ 6 }>
                    {   
                        loading 
                        ? 
                        (
                            <Spinner animation="border" role="status" style={{ width: '5rem', height: '5rem'}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            
                                title.trailer.linkEmbed !== null ?
                            (
                                <>
                                    <h4>Trailer</h4>
                                    <embed src={title.trailer.linkEmbed} style={{ width: '100%', height: '500px'}} />
                                </>
                            ) : (
                                <>
                                    <h4>Trailer</h4>
                                    <Alert variant='info'>
                                        Ups!, this movie/serie doesn't have a trailer yet!
                                    </Alert>
                                </>
                            )
                            
                        ) 
                    }
                </Col>
                <Col xs={ 12 } md={ 6 }>
                    <h4>Actors</h4>
                    {
                        loading
                        ?
                        (
                            <Spinner animation="border" role="status" style={{ width: '5rem', height: '5rem'}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            <div style={{paddingLeft: '30px', paddingRight: '30px', backgroundColor: 'grey'}}>
                                <Slider {...settings}>
                                    {
                                        title.actorList.map((e,i,o) =>  {
                                            const { asCharacter, image, name } = e;
                                            return (
                                                <div key={i} style={{background: '#419be0'}}>
                                                    <Card>
                                                        <LazyLoadImage
                                                            height={380}
                                                            width={190}
                                                            src={image.replace('original','190x380')}
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>{name}</Card.Title>
                                                            <Card.Text>
                                                            As: {asCharacter}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        )
                    }
                
                        
                
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={ 12 } md={ 6 }>                    
                    {   
                        loading 
                        ? 
                        (
                            <Spinner animation="border" role="status" style={{ width: '5rem', height: '5rem'}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            <Tabs defaultActiveKey="plot-en" className="mb-3">
                                <Tab eventKey="plot-en" title="Trama (EN)">
                                    <div>{title.plot}</div>
                                </Tab>
                                <Tab eventKey="plot-es" title="Trama (ES)">
                                    <div>{title.plotLocal}</div>
                                </Tab>
                            </Tabs>    
                        ) 
                    }
                </Col>
                <Col xs={ 12 } md={ 6 }>                    
                    {   
                        loading 
                        ? 
                        (
                            <Spinner animation="border" role="status" style={{ width: '5rem', height: '5rem'}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            <ListGroup>
                                <ListGroup.Item><b>Producers:</b> {title.companies}</ListGroup.Item>
                                <ListGroup.Item><b>Director:</b> {title.directors}</ListGroup.Item>
                                <ListGroup.Item><b>Genres:</b> {title.genres == "" ? 'No genres added' : title.genres}</ListGroup.Item>
                                <ListGroup.Item><b>IMDB Rating:</b> {title.imDbRating == "" ? 'No Rated Yet' : title.imDbRating}</ListGroup.Item>
                            </ListGroup>
                        ) 
                    }
                </Col>
            </Row>
        </ErrorBoundary>
    )   
}

ItemDetails.propTypes = {
    idTitle: propTypes.string
};

export default ItemDetails;
