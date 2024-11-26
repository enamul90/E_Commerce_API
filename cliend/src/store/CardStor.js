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
let CardListApi = "http://localhost:3001/api/CardList"
let RemoveCardApi = "http://localhost:3001/api/RemoveCardList"
let CreateInvoiceApi = "http://localhost:3001/api/CreateInvoice"
let InvoiceListApi = "http://localhost:3001/api/InvoiceList"
let InvoiceProductListApi = "http://localhost:3001/api/InvoiceProduct/"


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

    CartList:null,
    CartCount:0,
    CartTotal:0,
    CartVatTotal:0,
    CartPayableTotal:0,

    CartListRequest:async()=>{
        try {
            let res=await axios.get(CardListApi, token);
            set({CartList:res.data['data']})
            set({CartCount:(res.data['data']).length})
            let total=0
            let vat=0
            let payable=0
            res.data['data'].forEach((item,i)=>{
                if(item['product']['discount']===true){
                    total=total+parseInt(item['qty'])*parseInt(item['product']['discountPrice'])
                }else{
                    total=total+parseInt(item['qty'])*parseInt(item['product']['price'])
                }
            })

            vat=total*0.05
            payable=vat+total
            set({CartTotal:total})
            set({CartVatTotal:vat})
            set({CartPayableTotal:payable})

        }catch (e) {
            unauthorized(e.response.status)
        }
    },


    RemoveCartListRequest:async(cartID)=>{
        try {
            set({CartList:null})
            await axios.post(RemoveCardApi,{"_id":cartID},token);
        }catch (e) {
            unauthorized(e.response.status)
        }
    },




    CreateInvoiceRequest:async()=>{
        try {
            let res=await axios.get(CreateInvoiceApi, token);
            window.location.href=res.data['data']['GatewayPageURL'];
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    InvoiceList: null,
    InvoiceListCount: 0,

    InvoiceListRequest:async()=>{
        try {
            let res=await axios.get(InvoiceListApi, token);
            if(res.data['status'] === "success"){
                set({InvoiceList:res.data['data']})
                set({InvoiceListCount:(res.data['data']).length})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },
    InvoiceProductList : null,
    InvoiceProductRequest:async(id)=>{
        try {
            let res=await axios.get(InvoiceProductListApi+id, token);
            if(res.data['status'] === "success"){
                set({InvoiceProductList:res.data['data']})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },


}))


export default CardStore;