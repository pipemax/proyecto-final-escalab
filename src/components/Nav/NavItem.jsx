import { React, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavItem = ({path, text}) => (
    <Fragment>
        <Nav.Item>
            <Nav.Link as={Link} to={path}>{text}</Nav.Link>
        </Nav.Item>
    </Fragment>
)

export default NavItem;
