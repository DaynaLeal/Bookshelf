import { Request, Response} from 'express'

import books from '../../static-data/myBooks.json'
import {Book} from '../interfaces/Book'

const fetchABook = (req: Request, res: Response): void => {
  const requestId: string = req.query.id
  const targetBook = books[requestId]
  res.json(targetBook)
}

interface books {
  [key: string]: Book
}

export default fetchABook

