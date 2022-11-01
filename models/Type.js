const { Schema, model, models } = require("mongoose")

const typeSchema = new Schema({
    name: { type: String },
})

module.exports = models.Type || model("Type", typeSchema)
