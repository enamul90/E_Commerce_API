import { FeaturesListService, LegalDetailService} from "../Services/FeaturesSevice.js";



export const FeaturesList=async(req,res)=>{
    let result=await FeaturesListService(req);
    return res.status(200).json(result)
}


export const LegalDetail=async(req,res)=>{
   let result=await LegalDetailService(req);
   return res.status(200).json(result)
}


