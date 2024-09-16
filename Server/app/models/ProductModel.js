import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title:{type:String,required: true},
    shortDes:{type:String,required: true},
    price:{type:Number,required: true},
    // discount:{type:Boolean,required: true},
    discountPrice: {type:String},
    image:{type:String},
    star:{type:String},
    // stock:{type:Boolean},
    remark:{type:String},
    categoryID:{type: mongoose.Schema.Types.ObjectId},
    brandID:{type:mongoose.Schema.Types.ObjectId},
}, { timestamps: true, versionKey: false }
)

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;