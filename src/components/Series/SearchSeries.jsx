import React, { useEffect }  from 'react';
import useGetSearchSeries from '../../custom-hooks/useGetSearchSeries';
import ErrorComponent from '../Error';
import { Row, Alert } from 'react-bootstrap';
import MoviesList from '../MoviesList';
import propTypes from "prop-types";
import Loader from '../Loader';

const SearchSeries = ({query}) => {
    const { series, loadingSeries, errorSeries, getSearchSeries } = useGetSearchSeries();

    useEffect(() => {
        getSearchSeries(query);
    }, []);
    
    return (
        <div className='d-flex justify-content-center'>
            { loadingSeries ? (
                <Loader/>
            ) : errorSeries ? (
                <ErrorComponent/>
            ) : (
                <Row xs={12} md={4}>
                    { 
                        series == null ?
                            <Alert variant='info'>
                                Ups, there is no data related to the term you have searched
                            </Alert>
                        :
                        series.map(e => {
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

SearchSeries.propTypes = {
    query: propTypes.string
};

export default SearchSeries;
