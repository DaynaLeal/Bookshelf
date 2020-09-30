import React, { FC } from 'react'
import { v4 as uuid } from 'uuid'

const BookDisplay: FC<BookProps> = ({
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

type BookProps = {
  title: string,
  author: string,
  genre: string,
  publishedYear: number,
  pageCount: number,
  description: string,
  review: string
}

export default BookDisplay