import mongoose from 'mongoose'

const invoiceProductSchema = new mongoose.Schema({
    userID:{ type: mongoose.Schema.Types.ObjectId, required:true },
    invoiceID:{ type: mongoose.Schema.Types.ObjectId, required:true },
    productID:{ type: mongoose.Schema.Types.ObjectId, required:true },
    qty:String,
    price:String,
    color:{type:String},
    size:String,
},{timestamps:true, versionKey:false}
)

const invoiceProduct = mongoose.model('Invoice',invoiceProductSchema)
export default invoiceProduct;