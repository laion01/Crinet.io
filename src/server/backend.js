import express from 'express'

const multer = require('multer')
const bodyParser = require('body-parser')
const cors = require('cors')
const corsConfig = {
  origin: '*'
}

export const server = express()
export const upload = multer()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors(corsConfig))
server.use(express.static('src'))

const PORT = process.env.PORT || 8081
server.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  )
})