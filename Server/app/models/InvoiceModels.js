import mongoose from 'mongoose'

const invoiceSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, reflect: true },
    payable:String,
    cus_details:String,
    Ship_details:String,
    tran_id:String,
    val_id:String,
    delivery_status:String,
    payment_status:String,
    total:String,
    vat:String,
}, { timestamps: true ,versionKey: false }
)

const Invoice = mongoose.model('Invoice', invoiceSchema)
export default Invoice;
