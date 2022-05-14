const { model, Schema } = require("mongoose");

const stockbrokerSchema = new Schema (
    {
        assetId: [{
            type: Schema.Types.ObjectId, ref: "Asset"
        }],
        stockbroker: {
            type: String,
            required: true,
            unique: true,
        },
        accountOpeningFee: {
            type: Number,
            required: true
        },
        accountOpeningDate: {
            type: Date,
            required: true
        }
    },
    {
        timestamp: true
    }
)

module.exports = model("Stockbroker", stockbrokerSchema)