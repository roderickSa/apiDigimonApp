const { Schema, model, models } = require("mongoose")

const digimonSchema = new Schema({
    name: { type: String },
    xAntibody: {
        type: Boolean,
        default: false,
    },
    images: [
        {
            href: { type: String },
        },
    ],
    levels: [
        {
            levelID: {
                type: Schema.Types.ObjectId,
                ref: "Level",
            },
        },
    ],
    types: [
        {
            typeID: {
                type: Schema.Types.ObjectId,
                ref: "Type",
            },
        },
    ],
    attributes: [
        {
            attributeID: {
                type: Schema.Types.ObjectId,
                ref: "Attribute",
            },
        },
    ],
    fields: [
        {
            fieldID: {
                type: Schema.Types.ObjectId,
                ref: "Field",
            },
        },
    ],
    releaseDate: { type: String },
    descriptions: [
        {
            origin: { type: String },
            language: { type: String },
            description: { type: String },
        },
    ],
    skills: [
        {
            skillID: {
                type: Schema.Types.ObjectId,
                ref: "Skill",
            },
            translation: { type: String },
            description: { type: String },
        },
    ],
    priorEvolutions: [
        {
            digimonID: {
                type: Schema.Types.ObjectId,
                ref: "Digimon",
            },
            condition: { type: String },
        },
    ],
    nextEvolutions: [
        {
            digimonID: {
                type: Schema.Types.ObjectId,
                ref: "Digimon",
            },
            condition: { type: String },
        },
    ],
})

// delete models.Digimon

module.exports = models.Digimon || model("Digimon", digimonSchema)
