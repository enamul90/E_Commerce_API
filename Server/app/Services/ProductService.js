import mongoose from 'mongoose';
import BrandModel from "../models/BrandModel.js";
import CategoryModel from "../models/CategoryModel.js";
import productSliderModel from "../models/ProductSliderModel.js";
import productModel from "../models/ProductModel.js";
import reviewModel from "../models/ReviewModel.js";
import ReviewModel from "../models/ReviewModel.js";
import ProductDetail from "../models/ProductDetailModel.js"


const ObjectId = mongoose.Types.ObjectId;


export const BrandListService =  async ()=>{
    try{
        let data = await BrandModel.find()
        return {Status:"success", Message:"Brands list", data:data};
    }
    catch(err){
        return {Status:"fail", Message:"Brands list", Error:err.toString()};
    }

}

export  const CategoryListService =  async ()=>{
    try{
        let data = await CategoryModel.find()
        return {Status:"success", Message:"Category list", data:data};
    }
    catch(err){
        return {Status:"fail", Message:"Category list", Error:err.toString()};
    }
}

export  const SliderListService =  async ()=>{
    try{
        let data = await productSliderModel.find()
        return {Status:"success", Message:"Category list", data:data};
    }
    catch(err){
        return {Status:"fail", Message:"Category list", Error:err.toString()};
    }
}

export  const ListByBrandService =  async (req)=>{

    try{

        let Brand_id = new ObjectId(req.params.BrandID);
        let MatchStage= {$match:{brandID:Brand_id}};
        let JoinWithBrand = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoniWithCategory = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0, 'brandID':0, }}

        const data = await productModel.aggregate([
            MatchStage,
            JoinWithBrand,
            JoniWithCategory,
            unwindBrandStage,
            unwindCategoryStage,
            ProjectionStage,
        ])

        return {Status:"success", Message:"brand Product list", data:data};

    }
    catch(err){
        return {Status:"fail", Error:err.toString()};
    }

}

export  const ListByCategoryService =  async (req)=>{

    try{

        let Category_id = new ObjectId(req.params.CategoryID);
        let MatchStage= {$match:{categoryID:Category_id}};
        let JoinWithBrand = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoniWithCategory = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0, 'brandID':0, }}

        const data = await productModel.aggregate([
            MatchStage,
            JoinWithBrand,
            JoniWithCategory,
            unwindBrandStage,
            unwindCategoryStage,
            ProjectionStage,
        ])

        return {Status:"success", Message:"brand Product list", data:data};

    }
    catch(err){
        return {Status:"fail", Error:err.toString()};
    }

}

export const ListByRemarkService =  async (req)=>{

    try{

        let Remakr = req.params.Remark;
        let MatchStage= {$match:{remark:Remakr}};
        let JoinWithBrand = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoniWithCategory = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0, 'brandID':0, }}

        const data = await productModel.aggregate([
            MatchStage,
            JoinWithBrand,
            JoniWithCategory,
            unwindBrandStage,
            unwindCategoryStage,
            ProjectionStage,
        ])

        return {Status:"success", Message:"brand Product list", data:data};

    }
    catch(err){
        return {Status:"fail", Error:err.toString()};
    }

}


export const SmilierProductService =  async (req)=>{
    try{

        let Category_id = new ObjectId(req.params.CategoryID);
        let limit = {$limit:3};
        let MatchStage= {$match:{categoryID:Category_id}};
        let JoinWithBrand = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoniWithCategory = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0, 'brandID':0, }}


        const data = await productModel.aggregate([
            MatchStage,
            limit,
            JoinWithBrand,
            JoniWithCategory,
            unwindBrandStage,
            unwindCategoryStage,
            ProjectionStage,
        ])

        return {Status:"success", Message:"brand Product list", data:data};

    }
    catch(err){
        return {Status:"fail", Error:err.toString()};
    }

}

export  const ListByKeywordService =  async (req)=>{
    try{
        let searchRegex= {$regex:req.params.Keyword, "$options":"i"};
        let searchPrams = [{title:searchRegex},{shortDes:searchRegex}];
        let searchQuery= {$or:searchPrams};
        let MatchStage = {$match:searchQuery};
        let JoinWithBrand = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoniWithCategory = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoniWithProductDetail = {$lookup:{from:"ProductDetail",localField:"_id",foreignField:"productID",as:"productDetail"}};
        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let unwindProductDetailStage={$unwind:"$productDetail"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0, 'brandID':0,'productDetail.productID':0 }}


        const data = await productModel.aggregate([
            MatchStage,
            JoinWithBrand,
            JoniWithCategory,
            JoniWithProductDetail,
            unwindBrandStage,
            unwindCategoryStage,
            unwindProductDetailStage,
            ProjectionStage,
        ])

        return {Status:"success", Message:"brand Product list", data:data};
    }

    catch (err){
        return {Status:"fail", Error:err.toString()};
    }


}

export const ProductDetailService =  async (req)=>{

    try{

        let ProductID = new ObjectId(req.params.ProductID);
        let MatchStage= {$match:{_id:ProductID}};
        let JoinWithBrand = {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoniWithCategory = {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoniWithProductDetail = {$lookup:{from:"ProductDetail",localField:"_id",foreignField:"productID",as:"productDetail"}};
        let unwindBrandStage={$unwind:"$brand"}
        let unwindCategoryStage={$unwind:"$category"}
        let unwindProductDetailStage={$unwind:"$productDetail"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0, 'brandID':0,'productDetail.productID':0 }}


        const data = await productModel.aggregate([
            MatchStage,
            JoinWithBrand,
            JoniWithCategory,
            JoniWithProductDetail,
            unwindBrandStage,
            unwindCategoryStage,
            unwindProductDetailStage,
            ProjectionStage,
        ])

        return {Status:"success", Message:"brand Product list", data:data};

    }
    catch(err){
        return {Status:"fail", Error:err.toString()};
    }

}



export const ProductReviewListService =  async (req)=>{

    try{
        let ProductID = new ObjectId(req.params.productID);
        let MatchStage= {$match:{productID:ProductID}};
        let JoinWithProfile = {$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"Profile"}};
        let unwindProfile={$unwind:"$Profile"}
        let ProjectionStage = {$project:{'des':1, 'rating':1,'Profile.cus_name':1,  }}



        let data = await reviewModel.aggregate([
            MatchStage,
            JoinWithProfile,
            unwindProfile,
            ProjectionStage
        ])

        return {Status:"success", Message:"review list", data:data};
    }

    catch (err){
        return {Status:"Fail",Error:err.toString()}
    }
}



export const CreateReviewService =  async (req)=>{

    let user_id =new ObjectId(req.headers.user_id._id)
    let reqBody = req.body;

    let data = await ReviewModel.create({

        productID: reqBody["productID"],
        userID:user_id,
        des:reqBody["des"],
        rating:reqBody["rating"],
        }
    )

    return {Data: data}

}

export const ProductListBuyFilterService =  async (req)=>{

    let user_id =new ObjectId(req.headers.user_id._id)
    let reqBody = req.body;

    let data = await ReviewModel.create({

        productID: reqBody["productID"],
        userID:user_id,
        des:reqBody["des"],
        rating:reqBody["rating"],
        }
    )

    return {Data: data}

}