const { model, Schema } = require("mongoose");

const stockbrokerSchema = new Schema (
    {
        asset_id: [{
            type: Schema.Types.ObjectId, ref: "Asset"
        }],
        stockbroker: {
            type: String,
            required: true,
            unique: true,
        },
        account_opening_fee: {
            type: Number,
            required: true
        },
        account_opening_date: {
            type: Date,
            required: true
        }
    },
    {
        timestamp: true
    }
)

module.exports = model("Stockbroker", stockbrokerSchema)