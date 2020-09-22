import { Express } from 'express'

import fetchBooks from '../helpers/fetchBooks'

const routeHandler = (app: Express): void => {
  app.get('/books', (req, res) => {
    fetchBooks(req, res)
  })

  //other handlers to be added here
}

export default routeHandler
