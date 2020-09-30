import React, { FC } from 'react'
import { v4 as uuid } from 'uuid'
import { Book } from '../interfaces/book'

const BookDisplay: FC<Book> = ({
  title,
  author,
  genre,
  publishedYear,
  pageCount,
  description,
  review,
}) => (
  <div key={uuid()}>
    <p>Title: {title}</p>
    <p>Author: {author}</p>
    <p>Genre: {genre}</p>
    <p>Year Published: {publishedYear}</p>
    <p>Page Count: {pageCount}</p>
    <p>Description: {description}</p>
    <p>My Review: {review}</p>
    <hr />
  </div>
)

export default BookDisplay