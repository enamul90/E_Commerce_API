import CardModel from "../models/CartModels.js";


import mongoose from "mongoose";
let ObjectId = mongoose.Types.ObjectId;

export const CreateInvoiceService = async (req) => {

    let user_id = new ObjectId(req.headers.user_id._id);
    let cus_email= req.headers.email

//     Calculate Product

    let matchStage = {$match:{userID:user_id}}
    let JoinStageWithProduct =  {$lookup: {
            from: 'products',
            localField: 'productID',
            foreignField:'_id',
            as: 'product'
        }}


    let unWindStage = {$unwind:"$product"}

    let CardProduct = await CardModel.aggregate(
        [
            matchStage,
            JoinStageWithProduct,
            unWindStage


        ]
    )

    return {data:CardProduct}

}


export const PaymentFailService = async (req) => {

}

export const PaymentCancelService = async (req) => {

}

export const PaymentIPNService = async (req) => {

}

export const PaymentSuccessService = async (req) => {

}

export const InvoiceLestService = async (req) => {

}