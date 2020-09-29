import { Request, Response} from 'express'

import rawBooks from '../../static-data/myBooks.json'
import {Book} from '../interfaces/Book'

const books: { [key: string]: Book } = rawBooks

const deleteBook = (req: Request, res: Response): void => {
  const requestId = req.params.id
  // const targetBook = books[requestId]

  delete books[requestId]

  res.json({ message: `Book has been deleted`})
}

export default deleteBook

