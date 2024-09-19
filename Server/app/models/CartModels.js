import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({

        productID:{type:mongoose.Schema.Types.ObjectId, required: true , unique:true},
        userID:{type:mongoose.Schema.Types.ObjectId, required:true},
        color:{type:String},
        ftq:{type:String},
        size:{type:String},

    },{timestamps:true, versionKey:false}
)

const CardModel = mongoose.model('carts',cardSchema);
export default CardModel;



