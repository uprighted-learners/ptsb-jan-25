import express from "express"
const router = express.Router()

router.get("/:id", (req, res) => res.send("Get a user"))
router.post("/", (req, res) => res.send("make a user"))
router.put("/:id", (req, res) => res.send("update a user"))
router.delete("/:id", (req, res) => res.send("delete a user"))

export default router
