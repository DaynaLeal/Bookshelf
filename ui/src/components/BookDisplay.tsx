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
  <tr>
    <td>{title}</td>
    <td>{author}</td>
    <td>{genre}</td>
    <td>{publishedYear}</td>
    <td>{pageCount}</td>
    <td>{description}</td>
    <td>{review}</td>
  </tr>
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