import SendEmail from "../utility/emailUtility.js";
import userModel from "../models/UserModel.js";
import {TokenEncode} from "../utility/TokenUtility.js";
import profileModel from "../models/ProfileModel.js";



export const UserOPTService =  async (req)=>{
    try{
        let email = req.params.email;
        let OTPCode = Math.floor(10000+Math.random()*90000);

        let EmailTest = `<!DOCTYPE html>
                                <html lang="en">
                                <head>
                                  <meta charset="UTF-8">
                                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                  <title>OTP Verification</title>
                                  <style>
                                    body {
                                      font-family: Arial, sans-serif;
                                      background-color: #f4f7fa;
                                      margin: 0;
                                      padding: 0;
                                    }
                                    .email-container {
                                      width: 100%;
                                      max-width: 600px;
                                      margin: 0 auto;
                                      padding: 20px;
                                      background-color: #fff;
                                      border-radius: 8px;
                                      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                                    }
                                    .email-header {
                                      text-align: center;
                                      background-color: #4CAF50;
                                      color: #fff;
                                      padding: 15px;
                                      border-radius: 8px 8px 0 0;
                                    }
                                    .email-body {
                                      padding: 20px;
                                      text-align: left;
                                    }
                                    .otp-code {
                                      font-size: 24px;
                                      font-weight: bold;
                                      color: #333;
                                      background-color: #f2f2f2;
                                      padding: 10px;
                                      border-radius: 5px;
                                      text-align: center;
                                    }
                                    .footer {
                                      margin-top: 30px;
                                      text-align: center;
                                      font-size: 12px;
                                      color: #777;
                                    }
                                    .footer a {
                                      color: #4CAF50;
                                      text-decoration: none;
                                    }
                                  </style>
                                </head>
                                <body>

                                  <div class="email-container">
                                    <div class="email-header">
                                      <h1>OTP Verification</h1>
                                    </div>

                                    <div class="email-body">
                                      <p>Dear User,</p>
                                      <p>Your One-Time Password (OTP) for verifying your account is:</p>

                                      <div class="otp-code">
                                        ${OTPCode}
                                      </div>

                                      <p>This OTP is valid for the next 10 minutes. Please do not share it with anyone.</p>

                                      <p>If you did not request this, please ignore this email or contact support.</p>
                                    </div>

                                    <div class="footer">
                                      <p>Thank you for using our service.</p>
                                      <p>If you have any issues, please visit our <a href="#">Support Center</a>.</p>
                                    </div>
                                  </div>

                                </body>
                            </html>`

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