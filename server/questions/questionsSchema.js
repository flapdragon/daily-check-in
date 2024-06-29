import mongoose from "mongoose"

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const QuestionsSchema = new Schema({
  question: String,
  isRead: Boolean,
  rating: Number // TODO: Not implemented yet, thinking of a do you like this question kind of thing for feedback
})

export default QuestionsSchema