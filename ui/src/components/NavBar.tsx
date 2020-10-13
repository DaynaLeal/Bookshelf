import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
  return(
    <nav className="navbar navbar-dark bg-dark mb-5 sticky-top">
      <a className="navbar-brand" href="/">
      {/* <img src="../../public/bookshelfNavBar.png" width="30" height="30" alt="" loading="lazy"/> */}
      My Bookshelf
      </a>
      <a className="nav-link my-2 my-lg-0" href="/mybooks">View Read Books</a>
    </nav>
  )
}

export default NavBar