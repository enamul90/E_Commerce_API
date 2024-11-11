import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true ,lowercase: true },
    password: { type: String, required: true },
    otp: { type: String, default:0},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
} ,{ timestamps: true, versionKey: false }
)

const User = mongoose.model('User', UserSchema);

export default User;