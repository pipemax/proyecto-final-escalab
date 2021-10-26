import React from 'react';
import { ListGroup, ListGroupItem, Col, Button, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector, useDispatch } from 'react-redux'; 
import { logged } from '../features/loginSlice';
import useModal from '../custom-hooks/useModal';
import ModalItem from './ModalItem';
import {addFavorite, removeFavorite} from '../features/favorites/favoriteSlice';
import propTypes from "prop-types";

const MoviesList = ({ id, fullTitle, img, crew, rating, year, isFavorite }) => {
	const { modal, handleCloseModal, handleOpenModal } = useModal();
	const loggedStatus = useSelector(logged);
	const dispatch 	= useDispatch();

	const handleClick = () => {
		handleOpenModal();
	}

	const handleAddFavorite = (titleId, titleName, titleCrew, titleYear, titleRating, titleImg) => {
		const data = {id: titleId, name: titleName, crew: titleCrew, year: titleYear, rating: titleRating, img: titleImg, movieOrSerie: 'Movie'};
		dispatch(addFavorite(data));
	}

	const handleRemoveFavorite = (titleId) => {
		const data = {id: titleId};
		dispatch(removeFavorite(data));
	}

    return (
		<Col md={3} style={{ height: '50rem', width: 'min-content'}}>
			<Card>
				<LazyLoadImage
					height={424}
					width={286}
					src={img.replace('original','286x424')}
				/>
				<Card.Body>
					<Card.Title>{fullTitle}</Card.Title>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>{ crew }</ListGroupItem>
					<ListGroupItem>Year: { year }</ListGroupItem>
					<ListGroupItem>IMDB Rating: { rating == '' ? 'Not Rated Yet' : rating }</ListGroupItem>
				</ListGroup>
				<Card.Body>
					<Button variant="primary" key={ id } onClick={ handleClick }>Details</Button>{' '}
					{ loggedStatus ? 
						(
							isFavorite ?
							(
								<Button variant="danger" onClick={ () => handleRemoveFavorite(id) }>Remove Favorite</Button>								
							)
							:
							(
								<Button variant="success" onClick={ () => handleAddFavorite(id, fullTitle, crew, year, rating, img) }>Add Favorites</Button>
							)
							
						)
					: ''
					}
				</Card.Body>
			</Card>
			<ModalItem
				modal= { modal }
				handleCloseModal= { handleCloseModal }
				idTitle = { id }
				fullTitle = { fullTitle }
			/>
		</Col>
    )
}

MoviesList.propTypes = {
    id: propTypes.bool,
    fullTitle: propTypes.object,
    img: propTypes.string,
    crew: propTypes.string,
	rating: propTypes.number,
	year: propTypes.number,
	isFavorite: propTypes.bool
};

export default MoviesList;
