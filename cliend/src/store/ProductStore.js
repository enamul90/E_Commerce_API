
import {create} from "zustand"
import axios from "axios"

let brandApi = "http://localhost:3001/api/BrandList"
let categoryApi = "http://localhost:3001/api/CategoryList"
let sliderApi = "http://localhost:3001/api/SliderList"
let productApi = "http://localhost:3001/api/ProductListByRemark/"
let brandListApi = "http://localhost:3001/api/ListByBrand/"
let categoryListApi = "http://localhost:3001/api/ListByCategory/"
let keywordApi = "http://localhost:3001/api/ListByKeyword/"
let productDetailsApi = "http://localhost:3001/api/ProductDetail/"
let productReviewApi = "http://localhost:3001/api/ProductReviewList/"

const ProductStore = create((set)=>({
    BrandList: null,
    BrandStoreListRequest: async ()=>{
        let res = await axios.get(brandApi)
        if(res.data['Status'] === "success"){
            set({ BrandList: res.data['data']})
        }

    },

    CategoryList: null,
    CategoryListRequest: async ()=>{
        let res = await axios.get(categoryApi)
        if(res.data['Status'] === "success"){
            set({ CategoryList: res.data['data']})
        }

    },

    SliderList: null,
    SliderListRequest: async ()=>{
        let res = await axios.get(sliderApi)
        if(res.data['Status'] === "success"){
            set({ SliderList: res.data['data']})
        }

    },

    ProductList: null,
    ProductListRequest: async (remark)=>{
        let res = await axios.get(productApi+remark)
        if(res.data['Status'] === "success"){
            set({  ProductList: res.data['data']})
        }

    },

    BuyList: null,
    ProductListBrandRequest: async (brandId)=>{
        let res = await axios.get(brandListApi+brandId)
        if(res.data['Status'] === "success"){
            set({  BuyList: res.data['data']})
        }

    },

    ProductListCategoryRequest: async (categoryId)=>{
        let res = await axios.get(categoryListApi+categoryId)
        if(res.data['Status'] === "success"){
            set({  BuyList: res.data['data']})
        }

    },

    ProductListKeywordRequest: async (keyword)=>{
        let res = await axios.get(keywordApi+keyword)
        if(res.data['Status'] === "success"){
            set({  BuyList: res.data['data']})
        }

    },

    searchKeyword: null,
    setSearchKeyword:(keyword)=>{
        set({searchKeyword :keyword})
    },

    productDetails: null,
    productDetailsRequest: async (id)=>{
        let res = await axios.get(productDetailsApi+id)
        if(res.data['Status'] === "success"){
            set({  productDetails: res.data['data']})
        }
    },

    productReviewList:null,
    productReviewRequest: async (id)=>{
        let res = await axios.get(productReviewApi+id)
        if(res.data['Status'] === "success"){
            set({ productReviewList: res.data['data']})
        }
        console.log(res.data['data'])
    },


}))

export default ProductStore;