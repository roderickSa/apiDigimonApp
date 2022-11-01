const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
        if (mongoose.connections.length > 0) {
            if (mongoose.connections[0].readyState === 1) {
                console.log("Already connected")
                return
            }
            await mongoose.disconnect()
        }
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(
            "connect!!, there is " +
                mongoose.connections.length +
                " connections right now"
        )
    } catch (error) {
        console.log(error)
        throw new Error("Error al iniciar la BD")
    }
}

const disconnect = async () => await mongoose.disconnect()

const convertDocToObj = (doc) => {
    doc._id = doc._id.toString()
    doc.createdAt = doc.createdAt.toString()
    doc.updatedAt = doc.updatedAt.toString()
    return doc
}

module.exports = { dbConnection, disconnect, convertDocToObj }
