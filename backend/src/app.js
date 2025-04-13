import express from 'express'
import bodyParser from 'body-parser'
import { messagesRoutes } from './routes/message.js'
import cors from 'cors'

const app = express()

app.get('/', (req, res) => {
  res.send('hi!')
})

app.use(cors())
app.use(bodyParser.json())

messagesRoutes(app)

export { app }
