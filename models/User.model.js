const { model, Schema } = require("mongoose");

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        passwordHash: {
            type: String,
            required: true
        },
    },
    {
        timestamp: true
    }
)

module.exports = model("User", userSchema);