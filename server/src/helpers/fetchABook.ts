import { Request, Response} from 'express'

import books from '../../static-data/myBooks.json'

const fetchABook = (req: Request, res: Response): void => {
  const requestId = req.params.id
  const book = books.filter(book => {
    return book.id == requestId
  })
  res.json(book[0])
}

export default fetchABook

//https://scotch.io/courses/build-a-restful-nodejs-api/get-requests