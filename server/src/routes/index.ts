import { Express } from 'express'

import fetchBooks from '../helpers/fetchBooks'
import fetchABook from '../helpers/fetchABook'

const routeHandler = (app: Express): void => {
  //get ALL my books
  app.get('/books', (req, res) => {
    fetchBooks(req, res)
  })

  //get a specific book by id
  app.get('/books/:id', (req, res) => {
    fetchABook(req, res)
  })
}

export default routeHandler
