import { Request, Response} from 'express'

import books from '../../static-data/myBooks.json'

const fetchABook = (req: Request, res: Response): void => {
  const requestId = req.query.id
  // const targetBook = books[requestId]
  // res.json(targetBook)
}

export default fetchABook

