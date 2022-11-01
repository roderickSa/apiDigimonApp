const { dbConnection } = require("../config/db")
const Level = require("../models/Level")

const getLevels = async (req, res) => {
    await dbConnection()

    const levels = await Level.find({})
    res.json(levels)
}

module.exports = { getLevels }
