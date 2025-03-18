import express from "express"
import { dirname } from "path"
import path from "path"
import { fileURLToPath } from "url"
const app = express()

app.use(express.static("static"))

app.get("/", (req, res) => {
  //   res.send("hello world")
  res.sendFile(
    "/home/dan/code/ptsb-jan-25/5-server-db/static-files/static/index.html"
  )
})

app.get("/about", (req, res) => {
  res.sendFile("static/two.html", {
    root: dirname(fileURLToPath(import.meta.url)),
  })
})

app.listen(4000, (req, res) => {
  console.log("listening on port 4000")
})
