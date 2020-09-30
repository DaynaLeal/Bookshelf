import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return(
    <div>
      <h1>Landing Page</h1>
      <Link to='/mybooks'>View My Bookshelf</Link>
    </div>
  )
}

export default Landing