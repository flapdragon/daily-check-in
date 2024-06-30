import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import questionsRoutes from './questions/index.js'
import responsesRoutes from './responses/index.js'

// TODO: create responses schema, endpoints
// TODO: create charts
// TODO: Add individual IPs to CORS
// TODO: Silly question generator - Need like ... I don't know 52 * 5 at the most
//     Needs to be one a day and need to keep track of what has been asked or hard-coded with the day
//     Need to figure out that mechanism
//     Have 15, need way more

// MongoDB
const mongoURL = "mongodb://127.0.0.1:27017/daily-check-in"
mainDB().catch((err) => console.log(err))
async function mainDB() {
  await mongoose.connect(mongoURL)
  console.log(`Connected to ${mongoURL}`)
}

// Express
const app = express()
app.use(cors()) // Use CORS so students can connect and submit
app.use(express.json()) // Parse request body as JSON
const port = 8888

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Routes, plural
app.use('/questions', questionsRoutes)
app.use('/responses', responsesRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})