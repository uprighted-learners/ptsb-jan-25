import express from "express"
import Breed from "../models/Breed.js"
import { mongoose } from "../db.js"

const router = express.Router()

// get all
router.get("/", async (req, res) => {
  const breeds = await Breed.find()
  res.send(breeds)
})

// get one
router.get("/:id", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const breed = await Breed.findOne({ _id: req.params.id })
    if (breed) {
      res.send(breed)
    } else {
      res.status(404).send("Breed not found")
    }
  } else {
    res.status(400).send("Invalid id")
  }
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
