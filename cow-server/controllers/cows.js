import express from "express"
import Cow from "../models/Cow.js"
import { mongoose } from "../db.js"

const router = express.Router()

// get all
router.get("/", async (req, res) => {
  console.log(req.user)
  // TODO maybe if we want to: filter cows by cow belonging to user

  const cows = await Cow.find()
  res.send(cows)
})

// specialized update endpoint
// this one takes in an array and updates all of the given cows
// rather than hitting the generic PUT endpoint many times
router.put("/castrate", async (req, res) => {
  const ids = req.body.cowsToCastrate

  if (
    !Array.isArray(ids) ||
    !ids.every((id) => mongoose.Types.ObjectId.isValid(id))
  ) {
    return res.status(400).send("cowsToCastrate must be an Array of valid IDs")
  }

  const data = await Cow.updateMany(
    { _id: { $in: ids } },
    { castratedDate: new Date() }
  )

  if (data.modifiedCount > 0) {
    res.send("marked cows as castrated")
  } else if (data.matchedCount === 0) {
    res.status(404).send("Cows not found")
  } else {
    res.status(500).send("something went wrong")
  }
})

// get one (by id)
router.get("/:cowId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.cowId)) {
    const cow = await Cow.findOne({ _id: req.params.cowId })
    if (cow) {
      res.send(cow)
    } else {
      res.status(404).send("Cow not found")
    }
  } else {
    res.status(400).send("Invalid id")
  }
})

// add a cow
router.post("/", async (req, res) => {
  try {
    const cow = new Cow(req.body)
    await cow.save()
    res.send("cow added to herd")
  } catch (err) {
    res.status(422).send(err.message)
  }
})

// update a cow
router.put("/:cowId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.cowId)) {
    const data = await Cow.updateOne({ _id: req.params.cowId }, req.body)

    if (data.modifiedCount === 1) {
      // TODO: send better message?
      res.send("updated cow info")
    } else if (data.matchedCount === 1) {
      res.send("no changes saved")
    } else {
      res.status(404).send("Cow not found")
    }
  } else {
    res.status(400).send("Invalid id")
  }
})

// note for the documentation we show farmers: don't use this when cows die!
// this is for deleting incorrect/malformed data
router.delete("/:cowId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.cowId)) {
    const data = await Cow.deleteOne({ _id: req.params.cowId })
    if (data.deletedCount === 1) {
      res.send("Cow has been removed")
    } else if (data.matchedCount === 0) {
      res.status(404).send("Cow now found")
    } else {
      res.status(500).send("Something went wrong")
    }
  } else {
    res.status(400).send("Invalid id")
  }
})

export default router
