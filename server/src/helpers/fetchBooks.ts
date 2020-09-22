import { Request, Response} from 'express'

import books from "../../static-data/myBooks.json"

const fetchBooks = (req: Request, res: Response): void => {
  console.log('request', req.path)
  res.json(books)
}

export default fetchBooks