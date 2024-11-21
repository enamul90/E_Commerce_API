import {create} from "zustand"
import axios from "axios"
import {getEmail, setEmail} from "../utility/utility.js";
import Cookies from 'js-cookie';


let userOtpApi = "http://localhost:3001/api/UserOPT/"
let verifyLoginApi = "http://localhost:3001/api/VerifyLogin/"
let LogOutApi = "http://localhost:3001/api/SignOut"
let ReadProfileApi = "http://localhost:3001/api/ReadProfile"


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

      const res =  await axios.get(ReadProfileApi, token)
        if(res.data['status'] === "success"){
            set({profileData: res.data['data']})
        }

    },

    updateProfile:()


}))

export default UserStore;