import { Express } from 'express'

import fetchBooks from '../helpers/fetchBooks'
import fetchABook from '../helpers/fetchABook'
import addBook from '../helpers/addBook'
import deleteBook from '../helpers/deleteBook'
// import editBook from '../helpers/editBook'

const routeHandler = (app: Express): void => {
  //get ALL my books
  app.get('/books', (req, res) => {
    fetchBooks(req, res)
  })

  //get a specific book by id
  app.get('/books/:id', (req, res) => {
    fetchABook(req, res)
  })

  //add a book
  app.post('/books/add', (req, res) => {
    addBook(req, res)
  })

  //edit a book
  // app.put('/books/edit/:id', (req, res) => {
  //   editBook(req, res)
  // })

  //delete a book
  app.delete('/books/delete/:id', (req, res) => {
    deleteBook(req, res)
  })
}

export default routeHandler
