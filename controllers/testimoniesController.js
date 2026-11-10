import { Testimony } from "../models/Testimony.js"

const createTestimony = async (req, res) => {
  const { nombre, email, mensaje } = req.body
  console.log(req.body)

  if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
    res.render("testimonies", {
      page: "Testimonios",
      error: "Todos los campos son obligatorios!",
      nombre,
      email,
      mensaje
    })
  } else {
    const testimony = await Testimony.create({
      nombre, email, mensaje
    })
    res.redirect("/testimonies?success=1")
  }
}

export {
  createTestimony
}