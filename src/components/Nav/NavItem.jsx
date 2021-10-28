import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { counter } from '../../features/favorites/favoriteSlice';
import propTypes from "prop-types";

const NavItem = ({path, text}) => {
    const contador = useSelector(counter);
    return (
        <Fragment>
            <Nav.Item>
                <Nav.Link as={ Link } to={ path }>{ text }{ path === '/favorites' ? ` (${contador})` : ''}</Nav.Link>
            </Nav.Item>
        </Fragment>
    )
}

NavItem.propTypes = {
    path: propTypes.string,
    text: propTypes.string
};

export default NavItem;
