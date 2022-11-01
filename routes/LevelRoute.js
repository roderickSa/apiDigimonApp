const { Router } = require("express")
const { getLevels } = require("../controllers/LevelController")

const router = Router()

router.get("/", getLevels)

module.exports = router
