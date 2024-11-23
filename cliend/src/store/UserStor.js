import {create} from "zustand"
import axios from "axios"
import {getEmail, setEmail, unauthorized} from "../utility/utility.js";
import Cookies from 'js-cookie';


let userOtpApi = "http://localhost:3001/api/UserOPT/"
let verifyLoginApi = "http://localhost:3001/api/VerifyLogin/"
let LogOutApi = "http://localhost:3001/api/SignOut"
let ReadProfileApi = "http://localhost:3001/api/ReadProfile"
let updateProfileApi = "http://localhost:3001/api/CreateProfile"


let token = {
    headers: {
        token: Cookies.get("token"),
    }
}

const UserStore = create((set)=>({

    loginFormValues: "",
    setLoginFormValues: ((v)=>{
        set({loginFormValues: v})
    }),

    UserOtpRequest: async (e)=>{

        let res = await axios.post(userOtpApi + e)
        setEmail(e)

        if(res.data['status'] === "success"){
            return true
        }
    },

    otpFormValues: "",
    setOtpFormValues: ((v)=>{
        set({otpFormValues: v})
    }),

    VerifyLoginRequest: async (o)=>{
        let email =  getEmail()
        setEmail(email)
        let res = await axios.get(`${verifyLoginApi}${email}/${o}`, {withCredentials:true})
        if(res.data['status'] === "success"){
            return true
        }
    },

    userLogin: ()=>{
        return !!Cookies.get("token")
    },

    signOut: async ()=>{


       const res = await axios.get(LogOutApi, {
           headers: {
               token: Cookies.get("token"),
           }
       })
        return res.data['status'] === "success"
    },



    profileData: null,

    reqProfileData: async()=>{
        try{
            const res =  await axios.get(ReadProfileApi, token)
            if(res.data['status'] === "success"){
                    set({profileData: res.data['data']['0']})
            }
            else {
                set({profileData: []})
            }

        }
        catch(e){
            unauthorized(e.response.status)
        }
    },

    profileFromChange: (name,value)=>{
        set((state)=>({
            profileData:{
                ...state.profileData , [name]:value
            }
        }))
    },

    updateProfileReq: async (body)=>{


        try{
            const res =  await axios.post(updateProfileApi,body, token)
            if(res.data['status'] === "success"){
                set({profileData:null})
            }
        }
        catch(e){
            unauthorized(e.response.status)
        }
    }

}))

export default UserStore;