const { validarCampos } = require("../middlewares/validar-campos");
const {
  existePaisPorId,
  existePersonaPorId,
  noExistePersonaPorId,
} = require("../helpers/db-validatorsNeo4j");
const { check } = require("express-validator");

const { Router } = require("express");

const {
  createPersona,
  getAllPersonas,
  getPersonaById,
  updatePersona,
  deletePersona,
} = require("../controllers/personasNeo.controller");

const router = Router();

//CREATE
router.post(
  "/",
  check("id").custom(noExistePersonaPorId),
  check("lugar_nacimiento").custom(existePaisPorId),
  validarCampos,
  createPersona,
);

//READ de todas las Personas
router.get("/", getAllPersonas);

//READ de una persona x id
router.get(
  "/:id",
  check("id").custom(existePersonaPorId),
  validarCampos,
  getPersonaById,
);

//UPDATE
router.put(
  "/:id",
  check("id").custom(existePersonaPorId),
  validarCampos,
  updatePersona,
);

//DELETE
router.delete(
  "/:id",
  check("id").custom(existePersonaPorId),
  validarCampos,
  deletePersona,
);

module.exports = router;
