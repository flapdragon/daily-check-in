import request from "request"
import { questions } from "./questions-data.js"

// Schema
// question: String,
// useDate: Boolean,
// rating: Number // TODO: Not implemented yet, thinking of a do you like this question kind of thing for feedback

const action = "bulk_create"
const id = ""
const port = 8888
let question = {}

switch (action) {
  // case "create":
  //   // Create
  //   product = {
  //     name: "Breville Stainless Steel Barista Express Espresso Machine Light Silver",
  //     description: "Grind, dose and extract all in one. Create great tasting espresso from bean to espresso in less than a minute. The Barista Express allows you to grind the beans right before extraction, and its interchangeable filters and a choice of automatic or manual operation ensure authentic café style results in no time at all.",
  //     category: [ "kitchen", "coffee" ],
  //     carousel: true,
  //     price: 559.99,
  //     numberRemaining: 100,
  //     image: "",
  //     rating: 4.6,
  //     // reviews: [ { review: "Awesome!", author: "Bob", rating: 5.0 } ],
  //     reviews: [],
  //     viewedBy: []
  //   }
  //   request.post(
  //     `http://localhost:${port}/products`,
  //     { json: product },
  //     function (error, response, body) {
  //         if (!error && response.statusCode == 200) {
  //             console.log(body)
  //         }
  //     }
  //   )
  //   break
  
  // case "select":
  //   request.get(
  //     `http://localhost:${port}/products/${id}`,
  //     { json: {} },
  //     function (error, response, body) {
  //         if (!error && response.statusCode == 200) {
  //             console.log(body)
  //         }
  //     }
  //   )
  //   break

  // case "update":
  //   // Update
  //   product = {
  //     name: "Breville Stainless Steel Barista Express Espresso Machine Light Silver",
  //     description: "Grind, dose and extract all in one. Create great tasting espresso from bean to espresso in less than a minute. The Barista Express allows you to grind the beans right before extraction, and its interchangeable filters and a choice of automatic or manual operation ensure authentic café style results in no time at all.",
  //     category: [ "kitchen", "coffee" ],
  //     carousel: true,
  //     price: 499.99,
  //     numberRemaining: 100,
  //     image: "",
  //     rating: 4.6,
  //     // reviews: [ { review: "Awesome!", author: "Bob", rating: 5.0 } ],
  //     reviews: [],
  //     viewedBy: []
  //   }
  //   request.put(
  //     `http://localhost:${port}/products/${id}`,
  //     { json: product },
  //     function (error, response, body) {
  //         if (!error && response.statusCode == 200) {
  //             console.log(body)
  //         }
  //     }
  //   )
  //   break

    // case "delete":
    //   console.log("delete")
    //   request.delete(
    //     `http://localhost:${port}/products/${id}`,
    //     { json: {} },
    //     function (error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //             console.log(body)
    //         }
    //         else {
    //           console.log(error)
    //         }
    //     }
    //   )
    //   break
    
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
}


// library.method(placeItsGoingTo, Somedata) then something happens
// request.method(place, { json: {} }, callback)
// axios.method(place, {}).then(callback)
// request.post(`http://localhost:${port}/products/${id}`, { json: product }, () => {})