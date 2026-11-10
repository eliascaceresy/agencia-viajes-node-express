import Sequelize from "sequelize"
import db from "../config/db.js"

export const Testimony = db.define("testimonies", {
  nombre: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  mensaje: {
    type: Sequelize.STRING
  }
})