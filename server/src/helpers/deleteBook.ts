import { Request, Response} from 'express'

import books from '../../static-data/myBooks.json'

const deleteBook = (req: Request, res: Response): void => {
  const requestId = req.params.id
  let book = books.filter(book => {
    return book.id == requestId
  })[0]

  const index: number = books.indexOf(book)
  books.splice(index, 1)

  res.json({ message: `Book has been deleted`})
}

export default deleteBook

