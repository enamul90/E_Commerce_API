import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
    productID: { type:mongoose.Schema.Types.ObjectId, unique: true,},
    userID: { type:mongoose.Schema.Types.ObjectId, unique: true,},
    des:String,
    rating:String,
},{ timestamps: true, versionKey: false }
)

const Review = mongoose.model('Review',  ReviewSchema);
export default Review;