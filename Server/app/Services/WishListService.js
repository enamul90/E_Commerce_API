import WishModel from "../models/WishModel.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;


export const WishListService = async (req) => {



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
        let projection = {$project:{'_id':0, 'product.title':1, 'productID':1, 'product.shortDes':1, 'product.price':1, 'product.image':1,}}

        let data =  await WishModel.aggregate(
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

export const CreateWishListService = async (req) => {

    try{
        let userID = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = userID;

        await WishModel.updateOne(reqBody,{$set:reqBody},{upsert:true});

        return {status:"success", message:"Created WishListComponent list successfully"};
    }
    catch (err){
        return {status:"error", Error:err.toString()};
    }


}

export const RemoveWishListService = async (req) => {

    try{
        let userID = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = userID;

        await WishModel.deleteOne(reqBody);

        return {status:"success", message:"Delete WishListComponent list successfully"};
    }
    catch (err){
        return {status:"error", Error:err.toString()};
    }

}