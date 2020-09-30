import { Request } from 'express'
import {Book} from '../interfaces/Book'

const pullReqBody = (req: Request): Book => {
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

  return book
}

export default pullReqBody