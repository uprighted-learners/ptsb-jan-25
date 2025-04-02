import "dotenv/config"
import express from "express"
import { dbConnect } from "./db.js"
import tokenValidation from "./middlewares/tokenValidation.js"
const app = express()

const PORT = process.env.SERVER_PORT

app.use(express.json())

import router from "./controllers/cows.js"
import breedsRouter from "./controllers/breeds.js"
import authRouter from "./controllers/auth.js"
app.use("/cows", tokenValidation, router)
app.use("/breeds", breedsRouter)
app.use("/auth", authRouter)

app.listen(PORT, () => {
  dbConnect()
  console.log(`[server] listening on port ${PORT}`)
})
