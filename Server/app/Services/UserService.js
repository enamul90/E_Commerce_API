import SendEmail from "../utility/emailUtility.js";
import userModel from "../models/UserModel.js";
import {TokenEncode} from "../utility/TokenUtility.js";
import profileModel from "../models/ProfileModel.js";



export const UserOPTService =  async (req)=>{
    try{
        let email = req.params.email;
        let OTPCode = Math.floor(10000+Math.random()*90000);

        let EmailTest = `your Email Verification Code ${OTPCode}`
        let EmailSubject ='Email Verification'

        await SendEmail(email,EmailTest,EmailSubject)
        await userModel.updateOne( {email:email},{$set:{otp:OTPCode}}, {upsert:true} )

        return {status:"success", message:"Successfully OPT Send",};
    }
    catch (err){
        return {status:"error",message:"Error occurred"};
    }
}

export const VerifyLoginService =  async (req)=>{

    try{
        let email = req.params.email;
        let otp = req.params.otp;

        let user = await userModel.find({email:email,otp:otp}).countDocuments('total');


        if(user===1){

            let user_id=await userModel.find({email:email,otp:otp}).select('_id')

            let token = TokenEncode(email, user_id[0],['_id'].toString())


            await userModel.updateOne( {email:email},{$set:{otp:0}},);

            return {status:"success", message:"Successfully verified", Token:token};

        }

        else {
            return {status:"error",message:"Error occurred"};
        }

    }
    catch (err){
        return {status:"error",error:err.toString()};
    }
}

export const CreateProfileService = async (req)=>{
    try{
        let userID = req.headers.user_id;
        let reqBody=req.body
        reqBody.userID=userID;
          await profileModel.updateOne({userID:userID},{$set:reqBody},{upsert:true} );

        return {status:"success", message:"Successfully created profile successfully.",};
    }
    catch (err){
        return {status:"error",Error:err.toString()};
    }
}

export const ReadProfileService =  async (req)=>{

    try{
        const userID =req.headers.user_id;

        let data = await profileModel.find({userID:userID});

        return {status:"success", message:"Successfully read profile successfully.", data:data};
    }

    catch (err){
        return {status:Error,Error:err.toString() }
    }
}