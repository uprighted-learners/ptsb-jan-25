import express from "express"
import Breed from "../models/Breed.js"
import { mongoose } from "../db.js"

const router = express.Router()

// get all
router.get("/", async (req, res) => {
  const cows = await Breed.find()
  res.send(cows)
})

// add a cow
// router.post("/", async (req, res) => {
//   try {
//     const cow = new Breed(req.body)
//     await cow.save()
//     res.send("breed added")
//   } catch (err) {
//     res.status(422).send(err.message)
//   }
// })

export default router
