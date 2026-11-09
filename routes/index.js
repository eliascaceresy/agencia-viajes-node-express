import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.render("inicio")
})

router.get("/about", (req, res) => {
  const viajes = "Viaje a alemania"

  res.render("about", {
    viajes
  })
})

router.get("/contact", (req, res) => {
  res.send("Contacto")
})

export default router;