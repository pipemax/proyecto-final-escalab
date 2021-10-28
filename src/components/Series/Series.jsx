import React, { useEffect }  from 'react';
import useGetSeries from '../../custom-hooks/useGetTopSeries';
import ErrorComponent from '../Error';
import { Row, Alert } from 'react-bootstrap';
import MoviesList from '../MoviesList';
import Search from '../Search';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../Error';
import Loader from '../Loader';

const Series = () => {
    const { series, loading, error, getTopSeries } = useGetSeries();

    useEffect(() => {
        getTopSeries();
    }, []);
    
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <Search>
                <div className='d-flex justify-content-center'>
                    { loading ? (
                        <Loader/>
                    ) : error ? (
                        <ErrorComponent/>
                    ) : (
                        <Row xs={12} md={12}>
                            { 
                                series.items.length == 0 ?
                                    <Alert variant='info'>
                                        Ups, the API doesnt have any data to show :(
                                    </Alert>
                                :
                                series.items.map(e => {
                                    const { id, title, image} = e;
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
            </Search>
        </ErrorBoundary>
    )
}

export default Series;
