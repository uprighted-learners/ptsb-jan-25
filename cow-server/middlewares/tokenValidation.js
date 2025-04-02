import jwt from "jsonwebtoken"

const tokenValidation = (req, res, next) => {
  try {
    // the JWT will be included in the request headers under "authorization"
    let token = req.headers.authorization
    if (!token) {
      res.status(401).send("authorization required")
    } else {
      // string parsing to remove "Bearer " from the string (if present)
      if (token.includes("Bearer")) token = token.split(" ")[1]

      // verify the token and retrieve the payload
      const payload = jwt.verify(token, process.env.JWT_KEY)
      if (!payload) {
        res.status(401).send("user not authorized")
      } else {
        // if you want to do something with this payload, now is the time!
        // or with the token, or.....?
        req.user = payload.userId
        next()
      }
    }
  } catch (err) {
    res.status(500).send(`unknown server error: ${err.message}`)
  }
}

export default tokenValidation
