import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { scpdata } from './scp';

function NavMenu() {
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">SCP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {scpdata.map(scp=>(
            <Nav className="me-auto" key={scp.Id}>
                    <Nav.Link href={`/scp/${scp.Id}`}>{scp.Item}</Nav.Link>
                    </Nav>
                ))}
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
export default NavMenu;