import express from 'express'
import responsesCreate from './responsesCreate.js'
import responsesCheckSubmitted from './responsesCheckSubmitted.js'
import moodsData from './moodsData.js'
import responsesDaily from "./responsesDaily.js"

// TODO: create responses schema, endpoints
// TODO: create charts

const router = express.Router()

// Create one response
router.post("/", responsesCreate)
// Check if user has submitted response
router.get("/check-submitted", responsesCheckSubmitted)
// Get moods data by date for one day for chart
router.get("/moods/:date", moodsData)
// Get daily responses by day
router.get("/daily/:day", responsesDaily)

export default router