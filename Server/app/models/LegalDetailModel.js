import mongoose from 'mongoose'

const legalsSchema = new mongoose.Schema({
        description:{type:String},
        type: {type: String },
}, { timestamps: true, versionKey: false }

)

const legals = mongoose.model('legals', legalsSchema);

export default legals;
