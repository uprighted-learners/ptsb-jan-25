import express from "express"
import bcrypt from "bcrypt"
import User from "../models/User.js"
const router = express.Router()

router.get("/", async (req, res) => {
  const users = await User.find()
  // res.send(users)
  // res.send("??")
})

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body
    const newUser = new User({
      username,
      email,
      password: bcrypt.hashSync(password, process.env.SALT), // TODO: make this salt a secret
    })
    await newUser.save()
    res.send("result")
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post("/login", (req, res) => {
  res.send("login")
})

export default router
