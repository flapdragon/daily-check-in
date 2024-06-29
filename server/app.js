import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import questionsRoutes from './questions/index.js'

// MongoDB
const mongoURL = "mongodb://127.0.0.1:27017/daily-check-in"
mainDB().catch((err) => console.log(err))
async function mainDB() {
  await mongoose.connect(mongoURL)
  console.log(`Connected to ${mongoURL}`)
}

// Express
const app = express()
app.use(cors())
app.use(express.json())
const port = 8888

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Questions routes
app.use('/questions', questionsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})