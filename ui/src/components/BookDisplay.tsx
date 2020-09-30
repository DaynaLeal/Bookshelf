import React, { FC } from 'react'

const BookDisplay: FC<BookProps> = ({
  title,
  author,
  genre,
  publishedYear,
  pageCount,
  description,
  review,
}) => (
  <div>
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

interface BookProps {
  title: string,
  author: string,
  genre: string,
  publishedYear: number,
  pageCount: number,
  description: string,
  review: string
}

export default BookDisplay