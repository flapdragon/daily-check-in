import "dotenv/config"
import axios from "axios"

console.log(process.env.SERVER_URL)

axios.get(`${process.env.SERVER_URL}/responses/daily/2025-07-09`)
  .then((response) => {
    // handle success
    console.log(response.data)
  })