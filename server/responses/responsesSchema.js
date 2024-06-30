import mongoose from "mongoose"

const Schema = mongoose.Schema

const ResponsesSchema = new Schema({
  ip: String, // Student IP address
  firstName: String,
  lastName: String,
  grateful: String,
  silly: String,
  mood: Number,
  concerns: String,
  submittedDate: Date // Date time submitted
})

export default ResponsesSchema