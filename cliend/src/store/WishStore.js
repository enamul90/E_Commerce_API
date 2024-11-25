import {create} from "zustand"
import axios from "axios"
import {unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";
import {persist} from "zustand/middleware";

let token = {
    headers: {
        token: Cookies.get("token"),
    }
}

let CreateWishApi = "http://localhost:3001/api/CreateWishList"
let WishListApi = "http://localhost:3001/api/WishList"
let RemoveWishApi = "http://localhost:3001/api/RemoveWishList"


const WishStore  = create(
    persist(
        (set)=>({

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

            RemoveWishRequest : async (id)=>{
                try {
                    const reqBody = {
                        "productID": id
                    }
                    let res = await axios.post(  RemoveWishApi,reqBody, token )
                    if(res.data['status'] === "success"){
                        return true
                    }

                }
                catch(error){
                    unauthorized(error.response.status)
                }
            },

        }),
        {
            name:"wish-store",
            partialize: (state)=>({
                WishList: state.WishList,
                WishCount: state.WishCount,
            })
        },
    ))

export default WishStore;