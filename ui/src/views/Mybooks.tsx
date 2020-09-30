import React, { useState, useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import client from '../client'

import { Book } from '../interfaces/book'

const MyBooks = ({ routeProps }: Props) => {
  console.log('route props', routeProps)
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async (): Promise<void> => {
      try {
      //collect book data
      const { data } = (await client.get('/books')) as BookApiResponse
      //set book data
      setBooks(data)
      } catch(error) {
        console.error('error occurred', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchBooks()
  }, [])

  return isLoading ? (
    <h1>It may take a moment to collect all your books...</h1>
  ) : (
    <>
      <h2>Bookshelf</h2>
      <div className="bookShelf">
        {books.map(book => (
          <div key={uuid()}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Year Published: {book.publishedYear}</p>
            <p>Page Count: {book.pageCount}</p>
            <p>Description: {book.description}</p>
            <p>My Review: {book.review}</p>
            <hr/>
          </div>
        ))}
      </div>
    </>
  )
}


interface Props {
  routeProps: RouteProps
}

interface BookApiResponse {
  data: Book[]
}

export default MyBooks

// useState and useEffect
// https://www.youtube.com/watch?v=LZKsD_5ttZ4
// .map(), lists, keys
// https://reactjs.org/docs/lists-and-keys.html