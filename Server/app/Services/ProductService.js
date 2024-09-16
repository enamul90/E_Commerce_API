import mongoose from 'mongoose';
import BrandModel from "../models/BrandModel.js";
import CategoryModel from "../models/CategoryModel.js";
import productSliderModel from "../models/ProductSliderModel.js";
import productModel from "../models/ProductModel.js";

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

        let Brand_id = new ObjectId(req.headers['brand_id']);

        const data = await productModel.find( {brandID:Brand_id })

        return {Status:"success", Message:"brand Product list", data:data};

    }
    catch(err){
        return {Status:"fail", Error:err.toString()};
    }

}

export  const ListByCategoryService =  async (req)=>{
    try{
        let category_id = new ObjectId(req.headers['category_id']);
        const data = await productModel.find( {categoryID: category_id });
        return {Status:"success", Message:"category Product list", data:data};

    }
    catch(err){
        return {Status:"fail", Error:err.toString()};
    }

}

export  const ListByKeywordService =  async (req)=>{
    let keyword = req.params.keyword;
    return {data:keyword}
}

export const ListByRemarkService =  async ()=>{

}

export const ProductDetailService =  async ()=>{

}

export const ProductReviewListService =  async ()=>{

}


// create some Data



export const CreateSliderListService =  async (req)=>{
    try{
        let reqBody= req.body;
        await productSliderModel.create(reqBody);

        return {Status:"success", Message:"ProductDetailService created successfully."};
    }
    catch (err){
        return {Status:"fail", Message:err.toString()};
    }
}

export const CreateProductService =  async (req)=>{
    try{
        let reqBody= req.body;
        await productModel.create(reqBody);

        return {Status:"success", Message:"ProductDetailService created successfully."};
    }
    catch (err){
        return {Status:"fail", Message:err.toString()};
    }
}