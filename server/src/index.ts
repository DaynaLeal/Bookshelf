import express, { urlencoded } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routeHandler from './routes'

const app = express()

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(bodyParser.json())

routeHandler(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`)
})

// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
// https://gist.github.com/indiesquidge/7fe1d8be1b973f782c97