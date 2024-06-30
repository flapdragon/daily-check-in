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
    let date = new Date("2024-07-12")
    // let date = new Date()
    let dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    const question = await Questions.findOne({ "useDate": dateString })
    // API response
    res.status(200).json(question)
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export default questionsGetDaily