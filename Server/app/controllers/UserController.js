
import {CreateProfileService, ReadProfileService, UserOPTService, VerifyLoginService} from "../Services/UserService.js";



export const UserOPT = async (req, res) => {

    let result = await UserOPTService(req)
    return res.json(result)

}


export const VerifyLogin = async (req, res) => {
    let result = await VerifyLoginService(req)
    if(result['status']==="success"){
        let cookieOption={
            expires:new Date( Date.now() + 3600 * 60 * 60 * 1000),
            httpOnly:false
        }
        res.cookie('Token',result['Token'])
    }
    else {

    }

    return res.json(result)

}


export const SignOut = async (req, res) =>{
    let cookieOption={
        expires:new Date( Date.now() - 3600 * 60 * 60 * 1000),
        httpOnly:false
    }
    res.cookie('Token',cookieOption)
    return res.json({status:"success"})
}


export const CreateProfile = async (req, res) => {
    let result = await CreateProfileService(req)
    return res.json(result)

}


export const UpdateProfile = async (req, res) => {
    let result = await CreateProfileService(req)
    return res.json(result)

}

export const ReadProfile = async (req, res) => {
    let result = await ReadProfileService(req)
    return res.json(result)
}

