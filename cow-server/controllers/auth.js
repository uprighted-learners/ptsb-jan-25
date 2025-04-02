import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
const router = express.Router()

// TODO: add more error handling

router.post("/register", async (req, res) => {
  const { email, password } = req.body
  const newUser = new User({
    email,
    password: bcrypt.hashSync(password, Number(process.env.SALT)),
  })
  console.log(newUser)
  await newUser.save()
  res.send(`new user ${newUser._id} created`)
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  // find a user with a matching email address
  const user = await User.findOne({ email })
  if (!user) {
    res.send("unknown username") // TODO: improve this
  } else {
    // check whether the password matches our saved, hased one
    const verified = await bcrypt.compare(password, user.password)
    if (!verified) {
      res.send("incorrect password") // TODO: improve this
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
        expiresIn: 60 * 60 * 24,
      })

      res.send({
        message: "user verified",
        token,
        user,
      })
    }
  }
})

export default router
