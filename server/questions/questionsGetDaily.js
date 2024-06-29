// Import libary
import mongoose from "mongoose"
// Import schema
import QuestionsSchema from "./questionsSchema.js"

// API - HTTP Get One where isRead is false
const questionsGetDaily = async (req, res) => {
  try {
    // Create question instance/model
    const Questions = mongoose.model("Questions", QuestionsSchema)
    // Get 1 question by Id
    const question = await Questions.findOneAndUpdate({ "isRead": false }, { "isRead": true })
    // API response
    res.status(200).json(question)
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export default questionsGetDaily