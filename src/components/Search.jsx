import React, { useState, Fragment } from 'react';
import { Row, Col, FormControl, InputGroup, Button, Form } from 'react-bootstrap';
import SearchMovies from './Movies/SearchMovies';
import SearchSeries from './Series/SearchSeries';
import Swal from 'sweetalert2';

const Search = (props) => {

    const [searchVal, setSearchVal] = useState('');
    const [typeVal, setTypeVal] = useState('Movies');    
    const [searchAction, setSearchAction] = useState(false);
    const [searchInvalid, setSearchInvalid] = useState(false);

    const handleOnChangeSearch = (e) => {
        setSearchVal(e.target.value);
        if(e.target.value.length == 0)
        {
            setSearchAction(false);
        }
        else
        {
            setSearchInvalid(false);
        }
    }

    const handleOnChangeSelect = (e) => {
        setTypeVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchVal.length > 0)
        {
            setSearchAction(true);
            setSearchInvalid(false);
        }
        else
        {
            setSearchInvalid(true);
        }
    }

    return (
        <Fragment>
            <div className='d-flex justify-content-center' style={{paddingTop: '20px'}}>
                <Form onSubmit={handleSubmit}>
                    <Row xs={12} md={12} lg={12}>
                        <Col md={4}>
                            <Form.Select onChange={handleOnChangeSelect} id="id_select_type">
                                <option>Movies</option>
                                <option>Series</option>
                            </Form.Select>
                        </Col>
                        <Col md={8}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Ex: GhostBusters"
                                    aria-label="Searching Movie or Serie"
                                    aria-describedby="basic-addon2"
                                    onChange={handleOnChangeSearch}
                                    type="text"
                                    isInvalid={searchInvalid}
                                />
                                <Button variant="success" type="submit">
                                    Search
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </div>        
            { 
                typeVal === 'Movies' && searchAction ? 
                ( <SearchMovies query= {searchVal} /> )
                :
                typeVal === 'Series' && searchAction ?
                ( <SearchSeries query= {searchVal} /> )
                :
                props.children
            }
        </Fragment>
    )
}

export default Search;
