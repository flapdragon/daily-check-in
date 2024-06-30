import mongoose from "mongoose"

const Schema = mongoose.Schema

const QuestionsSchema = new Schema({
  question: String, // Question text
  useDate: String, // Date already set in each record, one per day, but a string in YYYY/MM/DD
  rating: Number // TODO: Not implemented yet, thinking of a do you like this question kind of thing for feedback
})

export default QuestionsSchema