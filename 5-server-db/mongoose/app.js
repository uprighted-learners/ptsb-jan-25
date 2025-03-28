import express from "express"
import { dbConnect } from "./db.js"
const app = express()

app.use(express.json())

import router from "./controllers/books.js"
app.use(router)

app.listen(4000, () => {
  dbConnect()
  console.log(`logging on port 4000`)
})
