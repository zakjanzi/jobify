import express from "express"
const app = express()

// middleware

import notFoundMiddleware from "./middleware/not-found.js"
app.get("/", (req, res) => {
    res.send("welcome")
})

app.use(notFoundMiddleware)
const port = process.env.PORT || 5000


application.listen(port, () => {
    console.log(`Server is moss on port ${port}`)
})