import express from 'express'
import responsesCreate from './responsesCreate.js'

// TODO: create responses schema, endpoints
// TODO: create charts

const router = express.Router()

// Create one response
router.post("/", responsesCreate)

export default router