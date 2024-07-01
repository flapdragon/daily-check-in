// Import libary
import mongoose from "mongoose"
// Import schema
import ResponsesSchema from "./responsesSchema.js"

// API - HTTP Post
const responsesCreate = async (req, res) => {
  console.log(req.body)
  console.log(req.socket.remoteAddress)
  // Get values from body
  let { firstName, lastName, grateful, silly, mood, concerns } = req.body
  // Get student IP
  const ip = req.socket.remoteAddress
  const submittedDate = new Date()
  console.log( ip, firstName, lastName, grateful, silly, mood, concerns, submittedDate )
  // Validation
  // If required parameters aren't valid
  if (
    (!firstName || firstName.length === 0) ||
    (!lastName || lastName.length === 0)
  ) {
      console.log("Error: Post parameters are not valid.")
      res.status(500).send("Error: API parameters are not valid.")
  }
  // If valid, create
  else {
    try {
      // Create response instance/model
      const Responses = mongoose.model("Responses", ResponsesSchema)
      // Create response record
      await Responses.create({
        ip, firstName, lastName, grateful, silly, mood, concerns, submittedDate
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

export default responsesCreate