import mongoose from 'mongoose'

const featureSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
}, { timestamps: true ,versionKey: false }
)

const Feature = mongoose.model('Feature', featureSchema)
export default Feature;