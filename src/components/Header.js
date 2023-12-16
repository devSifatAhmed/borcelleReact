import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosAdd } from "react-icons/io";
import "./header.css";
function Header() {
    return (
        <header>
            <div className='container'>
                <Navbar expand="lg" className="bg-transparent shadow custom-navbar">
                    <Container>
                        {/* logo start */}
                        <Navbar.Brand as={Link} to="/">
                            <img src="images/logo.png" className='header-logo' alt="Borcelle Realestae | Sifat Ahmed" />
                        </Navbar.Brand>
                        {/* logo end */}
                        {/* toggle menu btn start */}
                        <Navbar.Toggle aria-controls="header-navbar"/>
                        {/* toggle menu btn end */}
                        <Navbar.Collapse id="header-navbar">
                            {/* nav menues start */}
                            <Nav className="flex-grow-1 fw-600 header-nav-menues justify-content-center gap-4 pt-xxl-0 pt-xl-0 pt-3">
                                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                <NavDropdown title="Property" className='header-nav-dropdown-menu'>
                                    <NavDropdown.Item as={NavLink} to="/all-properties">All Properties</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/not-found">Link 1</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/not-found">Link 2</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pages" className='header-nav-dropdown-menu'>
                                    <NavDropdown.Item as={NavLink} to="/about-us">About Us</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/not-found">Link 1</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/not-found">Link 2</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className='fw-600' as={NavLink} to="/contact">Contact</Nav.Link>
                            </Nav>
                            {/* nav menues end */}
                            {/* nav sign-in and add listing btn start */}
                            <div className='d-flex flex-nowrap gap-2 align-items-center py-xxl-0 py-xl-0 py-3'>
                                <NavLink to="/login" className="text--base fs-4 mb-1"><HiOutlineUser /></NavLink>
                                <Button as={NavLink} to="/not-found" className='bg-transparent text--base hov-text-white hov-bg--base border--base border-2 rounded-1' style={{border: "2px solid #DBBF7B"}}><IoIosAdd className='transi-0 fs-5'/> Add Listing</Button>
                            </div>
                            {/* nav sign-in and add listing btn end */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}

export default Header