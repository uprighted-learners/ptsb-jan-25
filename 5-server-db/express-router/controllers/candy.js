import express from "express"
const router = express.Router()

router.get("/", (req, res) => res.send("Here's the catalog: ..."))
router.get("/:id", (req, res) => res.send("Single candy info..."))
router.post("/", (req, res) => res.send("You made a POST"))
router.put("/:id", (req, res) => res.send("You made a put"))
router.delete("/:id", (req, res) => res.send("You made a delete"))

export default router
