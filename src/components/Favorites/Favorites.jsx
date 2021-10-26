import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Alert } from 'react-bootstrap';
import MoviesList from '../MoviesList';
import { favorites, counter } from '../../features/favorites/favoriteSlice';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../Error';

const Favorites = () => {
    const favoritesList = useSelector(favorites);
    const counterList   = useSelector(counter);
    
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <div className='d-flex justify-content-center'>
                {  
                    counterList == 0 ? (
                        <Alert variant='info'>
                            Ups!, it seems you have not added any favorites yet!
                        </Alert>
                    ) : (                 
                        <Row md={4}>
                            { favoritesList.map(e => {
                                const { id, name, img, crew, rating, year} = e;
                                return (
                                    <MoviesList 
                                        key= { id }
                                        id= { id }
                                        fullTitle= { name }
                                        img= { img }
                                        crew= {crew}
                                        rating= {rating}
                                        year= {year}
                                        isFavorite= {true}
                                    />
                                )
                            }) }                
                        </Row>                 
                    ) 
                }
            </div>
        </ErrorBoundary>
    )
}

export default Favorites;
