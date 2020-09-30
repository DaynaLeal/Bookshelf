import { Request, Response} from 'express'

import rawBooks from '../../static-data/myBooks.json'
import {Book} from '../interfaces/Book'
import getBookInput from './getBookInput'

const books: { [key: string]: Book } = rawBooks

const addBook = (req: Request, res: Response): void => {
  const newBook = getBookInput(req)

  const newKey = newBook.id
  books[newKey] = newBook
  
  res.json({ message: `Book titled ${newBook.title} has been added`})
}

export default addBook