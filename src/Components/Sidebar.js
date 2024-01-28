import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import AccordionComponent from './AccordionComponent';

const Sidebar = () => {

  return (
    <Container fluid className='bg-dark'>
      <Row>
        <Col md={12} className="sidebar text-light">
          <Navbar expand="md" className="text-light bg-light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-md-column">

                <li className="nav-item">
                  <NavLink className="nav-link" to='/products'>Products</NavLink>

                  <ul className="list-unstyled">
                    {/* Children of the 'Products' section */}
                    <li>
                      <NavLink className="nav-link" to='/products/iphone'>iPhone</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to='/products/samsaung'>SamSaung Huawei Microsoft</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to='/products/perfume'>Perfume</NavLink>
                    </li>
                    <li>
                    <AccordionComponent />
                      
                    </li>
                  </ul>

                </li>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>



      </Row>
    </Container>
  )
}

export default Sidebar
