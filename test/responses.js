import request from "request"

// firstName: String,
// lastName: String,
// grateful: String,
// silly: String,
// mood: Number,
// concerns: String,

const action = "create"
const id = ""
const port = 8888
let question = {}

switch (action) {
    
  case "create":
    // Create
    const studentResponse = {
      firstName: "Grace",
      lastName: "Hopper",
      grateful: "I am grateful for testing.",
      silly: "",
      mood: 1,
      concerns: ""
    }
    request.post(
      `http://localhost:${port}/responses`,
      { json: studentResponse },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body)
          }
      }
    )
    break
}


// library.method(placeItsGoingTo, Somedata) then something happens
// request.method(place, { json: {} }, callback)
// axios.method(place, {}).then(callback)
// request.post(`http://localhost:${port}/products/${id}`, { json: product }, () => {})