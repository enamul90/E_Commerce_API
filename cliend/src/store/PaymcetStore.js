import {create} from "zustand";
import axios from "axios";

let paymentSuccessApi = ""
const PaymentStore = create((set)=>({

    paymentSuccess : async (id)=>{
      let  res =  await axios.post(paymentSuccessApi + id)
        console.log(res)
    }


}))

export default PaymentStore;