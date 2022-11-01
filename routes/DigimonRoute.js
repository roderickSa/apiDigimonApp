const { Router } = require("express")
const { param } = require("express-validator")
const {
    getDigimons,
    getOneDigimon,
    getDigimonsByLevel,
} = require("../controllers/DigimonController")
const { existsDigimonId, existsLevelId } = require("../helpers/db-validations")
const { validarCampos } = require("../middlewares/validar-campos")

const router = Router()

router.get("/", getDigimons)

router.get(
    "/:id",
    [
        param("id", "No es un ID valido").isMongoId(),
        param("id").custom(async (id) => await existsDigimonId(id)),
        validarCampos,
    ],
    getOneDigimon
)

router.get(
    "/level/:id",
    [
        param("id", "No es un ID valido").isMongoId(),
        param("id").custom(async (id) => await existsLevelId(id)),
        validarCampos,
    ],
    getDigimonsByLevel
)

module.exports = router
