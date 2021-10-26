import React, { Fragment, useEffect }  from 'react';
import useGetMovies from '../../custom-hooks/useGetTopMovies';
import ErrorComponent from '../Error';
import { Spinner, Row, Alert } from 'react-bootstrap';
import MoviesList from '../MoviesList';
import Search from '../Search';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../Error';

const Movies = () => {
    const { movies, loading, error, getTopMovies } = useGetMovies();

    useEffect(() => {
        getTopMovies();
    }, []);
    
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <Search>
                <div className='d-flex justify-content-center'>            
                    { loading ? (
                        <Spinner animation="border" role="status" style={{ width: '5rem', height: '5rem'}}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : error ? (
                        <ErrorComponent/>
                    ) : (
                        <Row xs={12} md={12}>
                            { 
                                movies.items.length == 0 ?
                                    <Alert variant='info'>
                                        Ups, the API doesnt have any data to show :(
                                    </Alert>
                                :
                                movies.items.map(e => {
                                    const { id, fullTitle, image, crew, imDbRating, year} = e;
                                    return (
                                        <MoviesList 
                                            key= { id }
                                            id= { id }
                                            fullTitle= { fullTitle }
                                            img= { image }
                                            crew= {crew}
                                            rating= {imDbRating}
                                            year= {year}
                                            isFavorite= {false}
                                        />
                                    )
                                }) 
                            }                
                        </Row>   
                    ) }
                </div>
            </Search>
        </ErrorBoundary>
    )
}

export default Movies;
