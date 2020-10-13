import { Request, Response } from 'express'

import tbrBooks from '../../static-data/tbrBooks.json'

const fetchTBRList = (req: Request, res: Response): void => {
  console.log('get request to TBR list', req.path)
  const tbrList = Object.values(tbrBooks)
  res.json(tbrList)
}

export default fetchTBRList