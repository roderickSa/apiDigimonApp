const { Schema, model, models } = require("mongoose")

const fieldSchema = new Schema({
    name: { type: String },
    images: [
        {
            href: { type: String },
        },
    ],
})

module.exports = models.Field || model("Field", fieldSchema)
