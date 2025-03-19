import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"
const app = express()
import fs from "fs"

app.use(express.json())

app.get("/books/all", (req, res) => {
  res.sendFile("./static/books.json", {
    root: dirname(fileURLToPath(import.meta.url)),
  })
})

app.get("/books/:bookId", (req, res) => {
  // read file
  const data = fs.readFileSync("./static/books.json")
  // parse JSON into JS object/array?
  const parsedData = JSON.parse(data)
  // search through result to find a book with the matching ID
  const book = parsedData.find((b) => b.id == req.params.bookId)
  res.send(book)
})

app.post("/books/", (req, res) => {
  const book = req.body

  // to save new data...
  // open/read the JSON file
  const data = fs.readFileSync("./static/books.json")
  // parse the JSON
  const parsedData = JSON.parse(data)
  // add new book
  parsedData.push(book)
  // save it to file

  fs.writeFileSync("./static/books.json", JSON.stringify(parsedData))

  res.send("success")
})

app.listen(4000, () => {
  console.log(`listening on port 4000`)
})
