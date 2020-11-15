import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return(
    <Navbar bg="dark" variant="dark" className="sticky-top mb-5">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/bookshelfNavBar.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        My Library
      </Navbar.Brand>
      <Nav className="ml-auto" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/mybooks">View Bookshelf</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/addBook">Add a book to Bookshelf</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default NavBar