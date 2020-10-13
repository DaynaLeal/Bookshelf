import { Request, Response } from 'express'

import books from '../../static-data/myBooks.json'

const fetchBooks = (req: Request, res: Response): void => {
  console.log('get request to myBooks list', req.path)
  const allBooks = Object.values(books)
  res.json(allBooks)
}

export default fetchBooks 