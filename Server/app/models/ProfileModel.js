import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},
    cus_add:{type:String},
    cus_city:{type:String},
    cus_country:{type:String},
    cus_name:{type:String},
    cus_phone:{type:String},
    cus_postcode:{type:String},
    cus_Fax:{type:String},
    cus_State:{type:String},
    ship_add:{type:String},
    ship_city:{type:String},
    ship_country:{type:String},
    ship_name:{type:String},
    ship_phone:{type:String},
    ship_postcode:{type:String},
    ship_Fax:{type:String},
    ship_State:{type:String},

},{timestamps: true, versionKey:false}
)

const Profile= mongoose.model('Profile', ProfileSchema)
export default Profile;