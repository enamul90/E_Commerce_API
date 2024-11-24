import {create} from "zustand"
import axios from "axios"
import {unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";


let token = {
    headers: {
        token: Cookies.get("token"),
    }
}

let CreateWishApi = "http://localhost:3001/api/CreateWishList"
let WishListApi = "http://localhost:3001/api/WishList"


const WishStore  = create((set)=>({

    createWishRequest:async (ID)=>{
        try {
            const reqBody ={
                productID:ID
            }
            const req = await axios.post( CreateWishApi,reqBody , token)
            if(req.status === 200){
                return true
            }
        }
        catch(error){
            unauthorized(error.response.status)
        }
    },

    WishList : null,
    WishCount :0,

    WishListRequest : async ()=>{
        try {
            let res = await axios.get(  WishListApi, token )
            set({WishCount:res.data['data'].length})
            set({WishList:res.data['data']})
        }
        catch(error){
            unauthorized(error.response.status)
        }


    },




}))

export default WishStore;