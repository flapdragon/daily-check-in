import express from 'express'
import questionsGetDaily from './questionsGetDaily.js'
import questionsCreate from './questionsCreate.js'

// TODO: create submissions schema, endpoints
// TODO: create charts

const router = express.Router()

// Read one question, random daily, update as read
router.get("/daily", questionsGetDaily)
// Create one question
router.post("/", questionsCreate)

export default router