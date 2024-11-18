import FeaturesModel from "../models/FeaturesModel.js";
import LegalDetail  from "../models/LegalDetailModel.js"


export const FeaturesListService = async (req) =>{

    try{
        let data= await FeaturesModel.find();
        return {status:"success",data:data}
    }
    catch (e){
        return {status:"fail",data:e}.toString()
    }
}

export const LegalDetailService = async (req) =>{

    let type = req.params.type

    try{
        let data= await LegalDetail.find({type:type});
        return {status:"success",data:data}
    }
    catch (e){
        return {status:"fail",data:e}.toString()
    }
}


