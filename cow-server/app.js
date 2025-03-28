import express from "express"
import { dbConnect } from "./db.js"
const app = express()

app.use(express.json())

import router from "./controllers/cows.js"
import breedsRouter from "./controllers/breeds.js"
app.use("/cows", router)
app.use("/breeds", breedsRouter)

app.listen(4000, () => {
  dbConnect()
  console.log("[server] listening on port 4000")
})
