import { Request, Response} from 'express'

import books from "../../static-data/myBooks.json"

const fetchABook = (req: Request, res: Response): void => {
  console.log('get request', req.path)
  // res.json(books)
  // let book = books.find()
}

export default fetchABook