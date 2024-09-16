import mongoose from 'mongoose'

const BrandSchema = new mongoose.Schema({
        brand_name: {type: String, required: true,unique: true},
        brand_img: {type: String, required: true},
}, { timestamps: true, versionKey: false }

)

const BrandModel = mongoose.model('Brand', BrandSchema);

export default BrandModel;
