import cartModels from "../models/CartModels.js";

import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;


export const CardListService = async (req) => {

    try{

        let user_id=new ObjectId(req.headers.user_id._id)

        let matchingStage = {$match:{userID: user_id}};
        let joinProduct = {$lookup: {
                from: 'products',
                localField:"productID",
                foreignField: "_id",
                as:"product"
            }}

        let unwindProduct={$unwind:"$product"}
        let projection = {$project:{'_id':0,
                'product.title':1,
                'product.shortDes':1,
                'product.price':1,
                'product.image':1,
                "color": 1,
                "ftq": 1,
                "size": 1,

            }}

        let data =  await cartModels.aggregate(
            [
                matchingStage,
                joinProduct,
                unwindProduct,
                projection,
            ]
        )


        return {status:"success", message:"Your wish list", data:data};
    }
    catch (err){
        return {Status:"Fail", Error:err.toString()};
    }

}


export const CreateCardListService = async (req) => {

    try{
        let userID = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = userID;

        await cartModels.create(reqBody);

        return {status:"success", message:"Created card list successfully"};
    }
    catch (err){
        return {status:"error", Error:err.toString()};
    }


}


export const updateCardListService = async (req) => {

    try{
        let userID = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = userID;

        await cartModels.updateOne(reqBody,{$set:reqBody},);

        return {status:"success", message:"Created card list successfully"};
    }
    catch (err){
        return {status:"error", Error:err.toString()};
    }

}


export const RemoveCardListService = async (req) => {

    try{
        let userID = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = userID;

        await cartModels.deleteOne(reqBody);

        return {status:"success", message:"Delete Wish list successfully"};
    }
    catch (err){
        return {status:"error", Error:err.toString()};
    }

}