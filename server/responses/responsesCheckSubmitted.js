// Import libary
import mongoose from "mongoose"
// Import schema
import ResponsesSchema from "./responsesSchema.js"

// API - HTTP Post
const responsesCheckSubmitted = async (req, res) => {
  console.log(req.socket.remoteAddress)
  // Get student IP
  const ip = req.socket.remoteAddress
  // Get today as yyyy-mm-dd
  const date = new Date()
  let dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
  console.log( ip, dateString )
  // Find if user has any responses by ip and date
  try {
    // Create response instance/model
    const Responses = mongoose.model("Responses", ResponsesSchema)
    // Create response record
    const userResponse = await Responses.findOne({ ip: ip, submittedDate: { $gte: dateString } })
    const submitted = userResponse === null ? false : true
    // API response
    res.status(200).json({ "submitted": submitted })
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export default responsesCheckSubmitted