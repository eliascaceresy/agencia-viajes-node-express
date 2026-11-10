import express from "express"
import { paginaInicio, paginaNosotros, paginaTestimonios, paginaViajes, paginaViaje } from "../controllers/paginasController.js"
import { createTestimony } from "../controllers/testimoniesController.js"

const router = express.Router()

router.get("/", paginaInicio)
router.get("/about", paginaNosotros)
router.get("/travels", paginaViajes)
router.get("/travels/:slug", paginaViaje)
router.get("/testimonies", paginaTestimonios)
router.post("/testimonies", createTestimony)

export default router;