import express from "express"
const app = express()

app.use(express.json())

import booksRouter from "./controllers/books.js"
app.use(booksRouter)

app.listen(4000, () => console.log(`listening on port 4000`))
