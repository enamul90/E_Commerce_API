import {create} from "zustand"
import axios from "axios"
import {unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";


let token = {
    headers: {
        token: Cookies.get("token"),
    }
}

const createReviewApi = "http://localhost:3001/api/CreateReview"

const ReviewStore  = create((set)=>({

    ProductID : null,
    openPopup : "d-none",
    setProduct : (e)=>{
        set({ProductID:e})
    },
    setOpenPopup : (e)=>{
        set({openPopup:e})
    },

    reviewFormData:null,
    setReviewFormData : (name,value)=>{
        set((state)=>({
            reviewFormData:{
                ...state.reviewFormData , [name]:value
            }
        }))
    },

    reqReview : async (ProductID, reviewFormData)=>{

        try {
            const postBody= reviewFormData
            postBody.productID = ProductID

            let res =  await axios.post(createReviewApi, postBody, token)

            if(res.data['Data'] === "success"){
                return  true
            }
        }

        catch(error){
            unauthorized(error.response.status)

        }

    }


}))

export default ReviewStore;