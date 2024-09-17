import {
    BrandListService,
    CategoryListService, CreateProductService, CreateSliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListByKeywordService,
    ListByRemarkService,
    ProductDetailService,
    ProductReviewListService,
    SliderListService,
    SmilierProductService
} from "../Services/ProductService.js";


export const BrandList= async (req, res) => {
    let result = await BrandListService()
    return res.json(result)
}

export const CategoryList= async (req, res) => {
    let result = await CategoryListService()
    return res.json(result)

}

export const SliderList= async (req, res) => {
    let result = await SliderListService()
    return res.json(result)

}

export const ListByBrand= async (req, res) => {
    let result = await ListByBrandService(req)
    return res.json(result)

}

export const ListByCategory= async (req, res) => {
    let result = await ListByCategoryService(req)
    return res.json(result)

}

export const ListByRemark= async (req, res) => {
    let result = await ListByRemarkService(req)
    return res.json(result)

}

export const SmilierProduct= async (req, res) => {
    let result = await SmilierProductService(req)
    return res.json(result)

}


export const ListByKeyword= async (req, res) => {
    let result = await ListByKeywordService(req)
    return res.json(result)

}


export const ProductDetail= async (req, res) => {
    let result = await ProductDetailService(req)
    return res.json(result)

}


export const ProductReviewList= async (req, res) => {
    let result = await ProductReviewListService(req)
    return res.json(result)

}






// Create data Controller

export const CreateSliderList = async (req, res) => {
    let result = await  CreateSliderListService (req)
    return res.json(result)
}

export const CreateProduct = async (req, res) => {
    let result = await  CreateProductService(req)
    return res.json(result)
}