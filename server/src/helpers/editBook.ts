import { Request, Response} from 'express'

import rawBooks from '../../static-data/myBooks.json'
import {Book} from '../interfaces/Book'
import getBookInput from './getBookInput'

const books: { [key: string]: Book } = rawBooks

const editBook = (req: Request, res: Response): void => {
  const requestId = req.params.id

  const editedBook = getBookInput(req)

  books[requestId] = editedBook
  res.json(editedBook)
} 

export default editBook

