import "dotenv/config"
import express from "express"
import { dbConnect } from "../mongoose/db.js"
const app = express()

const PORT = process.env.SERVER_PORT || 4000

app.use(express.json())

import authRouter from "./controllers/auth.js"
import booksRouter from "./controllers/books.js"
app.use("/auth", authRouter)
app.use("/books", booksRouter)

app.listen(PORT, () => {
  dbConnect()
  console.log(`listning on port ${PORT}`)
})
