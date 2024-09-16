import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},
    cus_Address:{type:String},
    cus_city:{type:String},
    cou_country:{type:String},
    cou_name:{type:String},
    cus_Phone:{type:String},
    cou_postcode:{type:String},
    ship_address:{type:String},
    ship_city:{type:String},
    ship_country:{type:String},
    ship_name:{type:String},
    ship_phone:{type:String},
    ship_postcode:{type:String},
},{timestamps: true, versionKey:false}
)

const Profile= mongoose.model('Profile', ProfileSchema)
export default Profile;