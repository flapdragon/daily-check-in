import express from 'express'
import questionsGetDaily from './questionsGetDaily.js'
import questionsCreate from './questionsCreate.js'

// TODO: responses create
// TODO: responses get

const router = express.Router()

// Read one question, random daily, update as read
router.get("/daily", questionsGetDaily)
// Create one question
router.post("/", questionsCreate)

export default router