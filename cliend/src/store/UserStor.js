import {create} from "zustand"
import axios from "axios"
import {getEmail, setEmail} from "../utility/utility.js";
import Cookies from 'js-cookie';


let userOtpApi = "http://localhost:3001/api/UserOPT/"
let verifyLoginApi = "http://localhost:3001/api/VerifyLogin/"


const UserStore = create((set)=>({

    loginFormValues: "",
    setLoginFormValues: ((v)=>{
        set({loginFormValues: v})
    }),

    UserOtpRequest: async (e)=>{

        let res = await axios.post(userOtpApi + e)
        setEmail(e)

        console.log(res.data['status'])
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


}))

export default UserStore;