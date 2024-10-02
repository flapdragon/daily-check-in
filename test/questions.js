import request from "request"
// import { questions } from "./questions-data.js"
import { questions } from "./questions-data-3.js"

// Schema
// question: String,
// useDate: Boolean,
// rating: Number // TODO: Not implemented yet, thinking of a do you like this question kind of thing for feedback

const action = "bulk_create"
const startAt = 15
const id = ""
const port = 8888
let question = {}

switch (action) {
    
    case "bulk_create":
      console.log("bulk_create")
      questions.map((question, index) => {
        console.log("map", question)
        request.post(
          `http://localhost:${port}/questions/`,
          { json: question },
          function (error, response, body) {
              if (!error && response.statusCode == 200) {
                  console.log(body)
              }
              else {
                console.log(error)
              }
          }
        )
      })
      break

    case "bulk_add":
      console.log("bulk_add")
      const questionsToAdd = questions.slice(startAt)
      questionsToAdd.map((question, index) => {
        console.log("map", question)
          request.post(
            `http://localhost:${port}/questions/`,
            { json: question },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                }
                else {
                  console.log(error)
                }
            }
          )
      })
      break
}


// library.method(placeItsGoingTo, Somedata) then something happens
// request.method(place, { json: {} }, callback)
// axios.method(place, {}).then(callback)
// request.post(`http://localhost:${port}/products/${id}`, { json: product }, () => {})