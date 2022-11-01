const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
const APP_PORT = process.env.APP_PORT

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use("/api/v1/digimon", require("./routes/DigimonRoute"))
app.use("/api/v1/level", require("./routes/LevelRoute"))

app.listen(APP_PORT, () => {
    console.log(`App Digimon is running on port ${APP_PORT}`)
})
