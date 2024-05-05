const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    code: String,
    description: String,
    price: Number,
    tax: Number
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


productSchema.virtual('priceTaxes').get(function () {
    return this.price * this.tax;
});

productSchema.statics.productTax = function (tax) {
    return model('product').find({ tax: tax });
}

module.exports = model('product', productSchema)