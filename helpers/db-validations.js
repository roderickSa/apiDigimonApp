const { dbConnection } = require("../config/db")
const Digimon = require("../models/Digimon")
const Level = require("../models/Level")

const existsDigimonId = async (id) => {
    await dbConnection()
    const digimon = await Digimon.findById(id)
    if (!digimon) {
        throw new Error("Digimon not exists")
    }
    return true
}

const existsDigimonSlug = async (slug) => {
    await dbConnection()
    const digimon = await Digimon.findOne({ slug })
    if (!digimon) {
        throw new Error("Digimon slug not exists")
    }
    return true
}

const existsLevelId = async (id) => {
    await dbConnection()
    const digimon = await Level.findById(id)
    if (!digimon) {
        throw new Error("Digimon Level not exists")
    }
    return true
}

module.exports = { existsDigimonId, existsDigimonSlug, existsLevelId }
