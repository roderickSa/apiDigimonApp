const { Schema, model, models } = require("mongoose")

const skillSchema = new Schema({
    name: { type: String },
})

module.exports = models.Skill || model("Skill", skillSchema)
