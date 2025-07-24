// Import libary
import mongoose from "mongoose"
// Import schema
import QuestionsSchema from "./questionsSchema.js"

// API - HTTP Get One where useDate is today's date
const questionsGetDaily = async (req, res) => {
  try {
    // Create question instance/model
    const Questions = mongoose.model("Questions", QuestionsSchema)
    // Get question with today's date
    const today = new Date()
    // If weekday, use actual date, else use hard-coded date (for UTC do +7)
    const date = today.getDay() > 0 && today.getDay() < 6 ? today : new Date("2024-10-18T07:00:01.000")
    // let date = new Date()
    let dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
    // Get daily question from MongoDB questions collection
    const question = await Questions.findOne({ "useDate": dateString })
    console.log("question", question)
    // API response
    res.status(200).json(question)
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export default questionsGetDaily