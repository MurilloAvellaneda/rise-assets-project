const { model, Schema } = require("mongoose");

const assetSchema = new Schema (
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        stockbrokerId: {
            type: Schema.Types.ObjectId,
            ref: "Stockbroker"
        },
        assetTicker: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        operationType: {
            type: String,
            required: true
        },
        operationDate: {
            type: Date,
            required: true
        }
    },
    {
        timestamp: true
    }
)


module.exports = model("Asset", assetSchema)