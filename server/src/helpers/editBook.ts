import { Request, Response} from 'express'

import rawBooks from '../../static-data/myBooks.json'
import {Book} from '../interfaces/Book'

const books: { [key: string]: Book } = rawBooks

const editBook = (req: Request, res: Response): void => {
  const requestId = req.params.id

  const { title, id, author, genre, publishedYear, pageCount, type, description, rating, review } = req.body as Book

  const book = {
    title,
    id,
    author,
    genre,
    publishedYear,
    pageCount,
    type,
    description,
    rating,
    review
  }

  books[requestId] = book
  res.json(book)
  
} 

export default editBook

