const { Types } = require("mongoose")
const { dbConnection, disconnect } = require("../config/db")
const Digimon = require("../models/Digimon")
require("../models/Attribute")
require("../models/Field")
require("../models/Level")
require("../models/Skill")
require("../models/Type")

const getDigimons = async (req, res) => {
    let { page = 0, limit = 12 } = req.query

    if (isNaN(page) || isNaN(limit)) {
        page = 0
        limit = 12
    }
    await dbConnection()

    const totalDigimons = await Digimon.countDocuments()

    page = page <= 0 ? 1 : page
    const totalPages = Math.ceil(totalDigimons / limit)
    const offset = (page - 1) * limit

    const digimons = await Digimon.find({})
        .select("_id name slug images fields levels types attributes")
        .populate({ path: "levels.levelID", select: "_id name" })
        .populate({ path: "types.typeID", select: "_id name" })
        .populate({ path: "attributes.attributeID", select: "_id name" })
        .populate({ path: "fields.fieldID", select: "_id name images" })
        .skip(Number(offset))
        .limit(Number(limit))

    // await disconnect()
    res.json({ digimons, totalPages })
}

const getOneDigimon = async (req, res) => {
    const { id } = req.params

    await dbConnection()

    const digimon = await Digimon.findById(id)
        .populate({ path: "levels.levelID", select: "_id name" })
        .populate({ path: "types.typeID", select: "_id name" })
        .populate({ path: "attributes.attributeID", select: "_id name" })
        .populate({ path: "fields.fieldID", select: "_id name images" })
        .populate({ path: "skills.skillID", select: "_id name" })
        .populate({
            path: "priorEvolutions.digimonID",
            select: "_id name images",
        })
        .populate({
            path: "nextEvolutions.digimonID",
            select: "_id name images",
        })

    // await disconnect()
    res.json(digimon)
}

const getDigimonsByLevel = async (req, res) => {
    const { id } = req.params
    let { page = 0, limit = 12 } = req.query

    if (isNaN(page) || isNaN(limit)) {
        page = 0
        limit = 12
    }

    const queryMongo = {
        "levels.levelID": Types.ObjectId(id),
    }
    
    await dbConnection()

    const totalDigimons = await Digimon.countDocuments(queryMongo)

    page = page <= 0 ? 1 : page
    const totalPages = Math.ceil(totalDigimons / limit)
    const offset = (page - 1) * limit

    const digimons = await Digimon.find(queryMongo)
        .select("_id name images fields levels types attributes")
        .populate({ path: "levels.levelID", select: "_id name" })
        .populate({ path: "types.typeID", select: "_id name" })
        .populate({ path: "attributes.attributeID", select: "_id name" })
        .populate({ path: "fields.fieldID", select: "_id name images" })
        .skip(Number(offset))
        .limit(Number(limit))

    // await disconnect()
    res.json({ digimons, totalPages })
}

module.exports = { getDigimons, getOneDigimon, getDigimonsByLevel }
