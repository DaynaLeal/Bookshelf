import { Request, Response} from 'express'

import books from '../../static-data/myBooks.json'

const addBook = (req: Request, res: Response): void => {
  
  const book = {
    title: req.body.title,
    id : req.body.id,
    author: req.body.author,
    genre: req.body.genre,
    publishedYear: req.body.publishedYear,
    pageCount: req.body.pageCount,
    type: req.body.type,
    description: req.body.description,
    rating: req.body.rating,
    review: req.body.review
  }

  books.push(book)
  res.json(book)
}

export default addBook