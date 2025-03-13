import express from "express"
const app = express()

app.get("/", (req, res) => {
  console.log("received a get request")
  res.send("<h1>this is an http response</h1>")
})

app.get("/beans", (req, res) => {
  console.log("I love beans")
  res.send({
    person: "Danny",
    "favorite food": "beans",
  })
})

app.get("/beans/beans", (req, res) => {
  res.send("no really")
})

app.post("/", (req, res) => {
  console.log("post")
})

app.listen(4000, () => {
  console.log("listening at port 4000")
})
