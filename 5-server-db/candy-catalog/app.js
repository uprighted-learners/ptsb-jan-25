import express from "express"
const app = express()

//import the controller
import router from "./controllers/candy.js"

// import { add, message } from "./controllers/demo.js"

app.use(express.json())

// apply the controller as middleware
app.use(router)

app.listen(4000, () => {
  // console.log(add(5, 72))
  // console.log(message)
  console.log(`listening at 4000`)
})
app.use(express.json())
