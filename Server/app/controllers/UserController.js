
import {CreateProfileService, ReadProfileService, UserOPTService, VerifyLoginService} from "../Services/UserService.js";
import {JWT_EXPIRES} from "../config/config.js";



export const UserOPT = async (req, res) => {

    let result = await UserOPTService(req)
    return res.json(result)

}


export const VerifyLogin = async (req, res) => {
    let result = await VerifyLoginService(req)
    if(result['status']==="success"){
        let cookieOption={
            maxAge:JWT_EXPIRES,
            httpOnly:false,
            sameSite:"none",
            secure:true,
        }

        res.cookie('token',result['Token'],cookieOption)
        return res.json(result)
    }
    else {
        return res.json(result)
    }

}


export const SignOut = async (req, res) =>{

    res.clearCookie('token')
    return res.json({status:"success"})
}


export const CreateProfile = async (req, res) => {
    let result = await CreateProfileService(req)
    return res.json(result)


}


export const ReadProfile = async (req, res) => {
    let result = await ReadProfileService(req)
    return res.json(result)
}

