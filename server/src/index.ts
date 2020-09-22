import express from 'express'
import cors from 'cors'
import routeHandler from './routes'

const app = express()

app.use(cors())

//route handler
routeHandler(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`)
})

// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
// https://gist.github.com/indiesquidge/7fe1d8be1b973f782c97