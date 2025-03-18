import express from "express"
const app = express()

// import the controllers
import router from "./controllers/candy.js"
import userRouter from "./controllers/users.js"

// apply the controllers as middleware
app.use("/candy", router)
app.use("/users", userRouter)

// we can still have endpoints in here as well (but usually don't)
app.get("/thing", (req, res) => res.send("thing!"))

app.listen(4000, () => {
  console.log(`listening on 4000`)
})
