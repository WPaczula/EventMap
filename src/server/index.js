import { createServer } from 'http'
import express from 'express'
import compression from 'compression'
import morgan from 'morgan'
import path from 'path'
import createHtml from './createHtml'

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)

const app = express()

app.disable('x-powered-by')
app.use(compression())
app.use(morgan('common'))

app.use(express.static(
  path.resolve(__dirname, '../../build'),
))

app.get('*', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(createHtml(req.url))
})

const server = createServer(app)
server.listen(PORT, (err) => {
  if (err) throw err

  console.log(`Server started on port ${PORT}`)
})
