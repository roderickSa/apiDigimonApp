const { Schema, model, models } = require("mongoose")

const attributeSchema = new Schema({
    name: { type: String },
})

module.exports = models.Attribute || model("Attribute", attributeSchema)
