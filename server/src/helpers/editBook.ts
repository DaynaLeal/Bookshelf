import { Request, Response} from 'express'

import rawBooks from '../../static-data/myBooks.json'
import {Book} from '../interfaces/Book'
import pullReqBody from './pullReqBody'

const books: { [key: string]: Book } = rawBooks

const editBook = (req: Request, res: Response): void => {
  const requestId = req.params.id

  const book = pullReqBody(req)

  books[requestId] = book
  res.json(book)
  
} 

export default editBook

