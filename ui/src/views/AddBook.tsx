import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Link } from 'react-router-dom'

import AddForm from 'components/AddForm'

const AddBook = () => {
  return(
    <div>
      <h1>Add a Book To My Library</h1>
      <AddForm />
    </div>
  )
}

export default AddBook