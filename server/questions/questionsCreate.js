// Import libary
import mongoose from "mongoose"
// Import schema
import QuestionsSchema from "./questionsSchema.js"

// API - HTTP Post
const questionsCreate = async (req, res) => {
  console.log(req.body, typeof req.body.useDate)
  // Get values from body
  let { question, useDate, rating = 0 } = req.body
  console.log( question, useDate, rating )
  // Validation
  // If required parameters aren't valid
  if (
    (!question || question.length === 0) ||
    (!useDate || !isNaN(useDate))
  ) {
      console.log("Error: Post parameters are not valid.")
      res.status(500).send("Error: Post parameters are not valid.")
  }
  // If valid, create
  else {
    try {
      // Create product instance/model
      const Questions = mongoose.model("Questions", QuestionsSchema)
      // Create product record
      await Questions.create({
        question, useDate, rating
      })
      // API response
      res.status(200).json({ "message": "Success. Record created." })
    }
    catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  }
}

export default questionsCreate