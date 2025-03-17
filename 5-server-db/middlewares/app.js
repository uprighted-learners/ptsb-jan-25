import express from "express"
const app = express()

// middlewares intervene in the call stack
// they inject logic into the request-response cycle

// a middleware is just a normal function with the params:
// request (req), response (res), next
// next refers to the next function in the call stack
// we must end the function either by sending a response
// or by calling next()

const logTime = (req, res, next) => {
  const now = new Date().toLocaleTimeString()
  console.log(`That call was made at: ${now}`)
  next()
}

const logBeansTime = (req, res, next) => {
  if (req.url === "/kidney") {
    console.log("The time for kidney beans is NEVER")
  } else {
    const now = new Date().toLocaleTimeString()
    console.log(`The time for beans is ${now}`)
  }
  next()
}

// app.use() applies the function object to all routes
app.use(logTime)
// or we can limit the routes the function will apply to
app.use("/beans", logBeansTime)

app.get("/", (req, res) => {
  res.send("home")
})

app.get("/beans", (req, res) => {
  res.send("beans!!")
})

app.get("/beans/:bestBean", (req, res) => {
  res.send(`the best type of bean is ${req.params.bestBean}`)
})

app.listen(4000, () => {
  console.log("listening at 4000")
})
