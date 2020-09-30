import { Request, Response} from 'express'

import rawBooks from '../../static-data/myBooks.json'
import {Book} from '../interfaces/Book'
import pullReqBody from './pullReqBody'

const books: { [key: string]: Book } = rawBooks

const addBook = (req: Request, res: Response): void => {
  const book = pullReqBody(req)

  const newKey = book.id
  books[newKey] = book
  
  res.json({ message: `Book titled ${book.title} has been added`})
}

export default addBook