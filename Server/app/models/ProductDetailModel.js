import mongoose from 'mongoose'

const productDetailSchema = new mongoose.Schema({
    img1:{type: String, required: true},
    img2:{type: String, required: true},
    img3:{type: String, required: true},
    img4:{type: String},
    img5:{type: String},
    img6:{type: String},
    img7:{type: String},
    img8:{type: String},
    description:{type:String},
    color:{type:String},
    size:{type:Number},
    productId:{type:mongoose.Schema.Types.ObjectId, required:true },
}, { timestamps: true, versionKey: false }
)

const ProductDetail = mongoose.model('ProductDetail', productDetailSchema);
export default ProductDetail;
