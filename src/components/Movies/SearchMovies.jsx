import React, { useEffect }  from 'react';
import ErrorComponent from '../Error';
import { Row, Alert } from 'react-bootstrap';
import MoviesList from '../MoviesList';
import useGetSearchMovies from '../../custom-hooks/useGetSearchMovies';
import propTypes from "prop-types";
import Loader from '../Loader';

const SearchMovies = ({query}) => {
    const {movies, loadingMovies, errorMovies, getSearchMovies} = useGetSearchMovies();

    useEffect(() => {
        getSearchMovies(query);
    }, []);
    
    return (
        <div className='d-flex justify-content-center'>            
            { loadingMovies ? (
                <Loader/>
            ) : errorMovies ? (
                <ErrorComponent/>
            ) : (
                <Row xs={12} md={12}>
                    { 
                        movies == null ?
                            <Alert variant='info'>
                                Ups, there is no data related to the term you have searched
                            </Alert>
                        :
                        movies.map(e => {
                        const { id, title, image } = e;
                            return (
                                <MoviesList 
                                    key= { id }
                                    id= { id }
                                    fullTitle= { title }
                                    img= { image }
                                    crew= 'No Data'
                                    rating= 'No Rated Yet'
                                    year= 'No Data'
                                    isFavorite= {false}
                                />
                            )
                        }) 
                    }                
                </Row>   
            ) }
        </div>
    )
}

SearchMovies.propTypes = {
    query: propTypes.string
};

export default SearchMovies;
