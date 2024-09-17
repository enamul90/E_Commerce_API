import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
    productID: { type:mongoose.Schema.Types.ObjectId, unique: true,},
    userID: { type:mongoose.Schema.Types.ObjectId, unique: true,},
    des:String,
    rating:String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})

const Review = mongoose.model('Review',  ReviewSchema);
export default Review;