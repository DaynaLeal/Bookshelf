import { Request } from 'express'
import {Book} from '../interfaces/Book'

const getBookInput = (req: Request): Book => {
  const { title, id, author, genre, publishedYear, pageCount, type, description, rating, review } = req.body as Book

  const bookInput = {
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

  return bookInput
}

export default getBookInput