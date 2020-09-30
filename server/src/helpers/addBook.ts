import { Request, Response} from 'express'

import rawBooks from '../../static-data/myBooks.json'
import {Book} from '../interfaces/Book'

const books: { [key: string]: Book } = rawBooks

const addBook = (req: Request, res: Response): void => {
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

  const newKey = book.id
  books[newKey] = book
  
  res.json({ message: `Book titled ${book.title} has been added`})
}

export default addBook