import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react'
import { RouteProps } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import client from '../client'
import BookDisplay from 'components/BookDisplay'


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

  type sortKey = 'title' | 'author' | 'genre' | 'publishedYear' | 'pageCount'
  const sortByProperty = (property : sortKey) => {
    let sortedBooks = [...books]

    sortedBooks.sort((a, b) => {
      if(a[property] < b[property]){return -1}
      if(a[property] > b[property]){return 1}
      return 0
    })
    setBooks(sortedBooks)
  }

  return isLoading ? (
    <h1>It may take a moment to collect all your books...</h1>
  ) : (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
            <tr>
              <th scope="col" onClick={() => sortByProperty('title')}>Title</th>
              <th scope="col" onClick={() => sortByProperty('author')}>Author</th>
              <th scope="col" onClick={() => sortByProperty('genre')}>Genre</th>
              <th scope="col" onClick={() => sortByProperty('publishedYear')}>Year Published</th>
              <th scope="col" onClick={() => sortByProperty('pageCount')}>Page Count</th>
              <th scope="col">Description</th>
              <th scope="col">My Review</th>
            </tr>
        </thead>
        <tbody className="shelf">
          {books.map(book => (
            <BookDisplay key={uuid()} {...book}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface Props {
  routeProps: RouteProps
}

interface BookApiResponse {
  data: Book[]
}

interface Book {
  [key: string]: any
  title: string
  id: string
  author: string
  genre: string
  publishedYear: number
  pageCount: number
  type: string
  description: string
  rating: number
  review: string
}

export default MyBooks

// useState and useEffect
// https://www.youtube.com/watch?v=LZKsD_5ttZ4

// .map(), lists, keys
// https://reactjs.org/docs/lists-and-keys.html

// bootstrap - react
// https://create-react-app.dev/docs/adding-bootstrap/
