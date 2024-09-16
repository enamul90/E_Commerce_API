import mongoose from 'mongoose'

const productSliderSchema = new mongoose.Schema({
    tittle:{type:String},
    description:{type:String},
    price:{type:Number,},
    image:{type:String,},
    productID:{type:mongoose.Schema.Types.ObjectId, required: true},
},{ timestamps: true , versionKey: false }
)

const ProductSlider = mongoose.model('ProductSlider', productSliderSchema)

export default ProductSlider;