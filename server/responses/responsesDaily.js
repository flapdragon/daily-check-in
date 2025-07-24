// Import libary
import mongoose from "mongoose"
// Import schema
import ResponsesSchema from "./responsesSchema.js"

// API - Get daily responses by day, returning empty for students who didn't fill it out, HTTP Get
const responsesDaily = async (req, res) => {
  const { day } = req.params
  const date = new Date(day)
  const tomorrow = new Date(day)
  tomorrow.setDate(tomorrow.getDate() + 1)
  try {
    // Response model
    const responses = mongoose.model("Responses", ResponsesSchema)
    // Find responses from today
    const dailyResponses = await responses.find({ submittedDate: { $gte: date, $lte: tomorrow } })
    // API response
    res.status(200).json({ "total": dailyResponses.length, "responses": dailyResponses })
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export default responsesDaily