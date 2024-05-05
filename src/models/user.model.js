const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cart: [{ type: Schema.Types.ObjectId, ref: 'product' }]
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('user', UserSchema)