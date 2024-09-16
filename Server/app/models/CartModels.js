import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
        productID:{type:mongoose.Schema.Types.ObjectId, required:true},
        userID:{type:mongoose.Schema.Types.ObjectId, required:true},
        color:{type:String},
        price:{type:String},
        ftq:{type:String},
        size:{type:String},

    },{timestamps:true, versionKey:false}
)

const Card = mongoose.model('Wish',cardSchema);
export default Card;