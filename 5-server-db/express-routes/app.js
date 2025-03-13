import express from "express"
const app = express()

app.get("/", (request, response) => {
  response.send("Welcome to the app")
})

// be careful with URL parameters!
// the server will use the first pattern match it finds
// app.get("/:test", (req, res) => {
//   console.log("oops")
//   res.send(req.params)
// })

// URL parameters
app.get("/greeting/:firstName/:lastName", (req, res) => {
  console.log(req.params)
  res.send(`Hello ${req.params.firstName} ${req.params.lastName}`)
})

// query parameters
// localhost:4000/double?num=4
app.get("/double", (req, res) => {
  console.log(req.query)
  if (!isNaN(req.query.num * 2)) {
    res.send(`${req.query.num * 2}`)
  } else {
    res.send("please include a number query parameter")
  }
})

app.get("/color", (req, res) => {
  res.send(`
        <body style="background-color: ${req.query.color};">
            <form>
                <input type="color" name="color" />
                <button type="submit">Click here</button>
            </form>
        </body>
                `)
})

app.get("/burrito", (req, res) => {
  // TODO: there is a way to specify a better path but I don't want to figure it out right now :)
  res.sendFile(
    "/home/dan/code/ptsb-jan-25/5-server-db/express-routes/burrito-order.html"
  )
})

app.listen(4000, () => {
  console.log(`listening at port 4000`)
})
