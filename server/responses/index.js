import express from 'express'
import responsesCreate from './responsesCreate.js'
import moodsData from './moodsData.js'

// TODO: create responses schema, endpoints
// TODO: create charts

const router = express.Router()

// Create one response
router.post("/", responsesCreate)
// Get moods data by date for one day for chart
router.get("/moods/:date", moodsData)

export default router