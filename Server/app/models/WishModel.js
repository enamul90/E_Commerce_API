import mongoose from 'mongoose'

const wishSchema = new mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},
},{timestamps:true, versionKey:false}
)

const Wish = mongoose.model('Wish',wishSchema);
export default Wish;
