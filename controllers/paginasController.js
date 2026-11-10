import { Testimony } from "../models/Testimony.js"
import { Viaje } from "../models/Viaje.js"

const paginaInicio = async (req, res) => {
  res.render("inicio", {
    page: "Inicio",
    clase: "home"
  })
}

const paginaNosotros = (req, res) => {
  res.render("about", {
    page: "Nosotros"
  })
}

const paginaViajes = async (req, res) => {
  const viajes = await Viaje.findAll()

  res.render("travels", {
    page: "Próximos Viajes",
    viajes
  })
}

const paginaTestimonios = async (req, res) => {
  try {
    const testimonies = await Testimony.findAll()
    res.render("testimonies", {
      page: "Testimonios",
      testimonies,
      success: req.query.success === "1"
        ? "Testimonio guardado exitosamente!"
        : null
    })
  } catch (error) {
    console.log(error)
  }
}

const paginaViaje = async (req, res) => {
  try {
    const { slug } = req.params
    const viaje = await Viaje.findOne({ where: { slug }})
    res.render("travel", {
      viaje
    })
  } catch (error) {
    console.log(error)
  }
}

export {
  paginaInicio,
  paginaViajes,
  paginaNosotros,
  paginaTestimonios,
  paginaViaje
}