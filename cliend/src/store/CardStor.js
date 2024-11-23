import {create} from "zustand"
import axios from "axios"
import {unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";


let token = {
    headers: {
        token: Cookies.get("token"),
    }
}

let CreateCardApi = "http://localhost:3001/api/CreateCardList"

const CardStore  = create((set)=>({

    loading: "opacity-100",
    setLoading: (e)=>{
        set({loading:e})
    },

    CartForm:{color:"",size:""},


    CartFormChange:(name,value)=>{
        set((state)=>({
            CartForm:{
                ...state.CartForm,
                [name]:value
            }
        }))
    },

    CartSaveRequest:async(CartForm ,id,qty)=>{

        try {
            let PostBody = CartForm
            PostBody.productID=id
            PostBody.qty=qty
            let res=await axios.post(CreateCardApi,PostBody,token);
            return res.data['status'] === "success";
        }
        catch (e) {
            unauthorized(e.response.status)
        }
    },



}))


export default CardStore;