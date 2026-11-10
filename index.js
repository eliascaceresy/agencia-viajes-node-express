import express from "express"
import router from "./routes/index.js"
import db from "./config/db.js"

const app = express()
const port = process.env.PORT || 4000

// Autenticacion base de datos
db.authenticate().then( () => {
  console.log("Base de datos conectada")
}).catch( error => {
  console.log(error)
})

// PUG enable
app.set("view engine", "pug");

app.use((req, res, next) => {
  const currentYear = new Date().getFullYear()
  res.locals.currentYear = currentYear
  res.locals.siteName = "Agencia de Viajes"
  next()
})

// Agregar body parser para leer datos del formulario
app.use(express.urlencoded({ extended: true }))

// Agregar router
app.use("/", router)

// Habilitar archivos publicos para assets
app.use(express.static("public"))

app.listen(port, () => {
  console.log(`El sevidor esta en ${port}`)
})