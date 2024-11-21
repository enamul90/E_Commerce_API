import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},
    cus_Add:{type:String},
    cus_city:{type:String},
    cou_country:{type:String},
    cou_name:{type:String},
    cus_Phone:{type:String},
    cou_postcode:{type:String},
    cou_Fax:{type:String},
    cou_State:{type:String},
    ship_Add:{type:String},
    ship_city:{type:String},
    ship_country:{type:String},
    ship_name:{type:String},
    ship_Phone:{type:String},
    ship_postcode:{type:String},
    ship_Fax:{type:String},
    ship_State:{type:String},

},{timestamps: true, versionKey:false}
)

const Profile= mongoose.model('Profile', ProfileSchema)
export default Profile;