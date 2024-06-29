// Import libary
import mongoose from "mongoose"
// Import schema
import QuestionsSchema from "./questionsSchema.js"

// 3. API - HTTP Post
const questionsCreate = async (req, res) => {
  console.log(req.body)
  // Get values from body
  let { question, isRead = false, rating = 0 } = req.body
  console.log( question, isRead, rating )
  // Validation
  // If required parameters aren't valid
  if ( !question || question.length === 0 ) {
      console.log("Error: Post parameters are not valid.")
      res.status(500).send("Error: Post parameters are not valid.")
  }
  // If valid, create
  else {
    try {
      // Create product instance/model
      const Questions = mongoose.model("Questions", QuestionsSchema)
      // 7. Create product record
      await Questions.create({
        question, isRead, rating
      })
      // 8. API response
      res.status(200).json({ "message": "Success. Record created." })
    }
    catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  }
}

export default questionsCreate