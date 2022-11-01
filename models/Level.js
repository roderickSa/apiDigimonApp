const { Schema, model, models } = require("mongoose")

const levelSchema = new Schema({
    name: { type: String },
})

module.exports = models.Level || model("Level", levelSchema)
