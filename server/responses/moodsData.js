// Import libary
import mongoose from "mongoose"
// Import schema
import ResponsesSchema from "./responsesSchema.js"

// API - HTTP Gwt
const moodsData = async (req, res) => {
  console.log(req.params)
  // Get values from body
  let { date } = req.params
  let tomorrow = new Date(date)
  tomorrow.setDate(tomorrow.getDate() + 1)
  // Validation
  // If required parameters aren't valid
  if (!date || isNaN(new Date(date))) {
      console.log("Error: API parameters are not valid.")
      res.status(500).send("Error: API parameters are not valid.")
  }
  // If valid, get moods data
  else {
    try {
      // Create response instance/model
      const Responses = mongoose.model("Responses", ResponsesSchema)
      // Get moods data for 1 day, starting at midnight the day of (date) and ending midnight the next day (tomorrow)
      const moods = await Responses.find({ submittedDate: { $gte: new Date(date), $lte: tomorrow } }, 'mood' ) // Return only mood field, and _id
      // Get unique mood values from aray of objects
      const uniqueMoods = [...new Set(moods.map(item => item.mood))]
      // Iterate over unique mood values and get count of each in {name:1,value:3} format for D3
      let moodsData = []
      uniqueMoods.map(mood => {
        moodsData.push({ name: mood, value: moods.reduce((acc, cur) => cur.mood === mood ? ++acc : acc, 0) })
      })
      console.log(uniqueMoods, moodsData)
      // API response
      res.status(200).json(moodsData)
    }
    catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  }
}

export default moodsData

// NOTES
// Get unique values from array of objects for moods => https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
// Get count of each mood from array of objects => https://stackoverflow.com/questions/45547504/counting-occurrences-of-particular-property-value-in-array-of-objects