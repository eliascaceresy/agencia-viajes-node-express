import express from "express"
import router from "./routes/index.js"

const app = express()
const port = process.env.PORT || 4000

// PUG enable
app.set("view engine", "pug");

app.use("/", router)

app.listen(port, () => {
  console.log(`El sevidor esta en ${port}`)
})