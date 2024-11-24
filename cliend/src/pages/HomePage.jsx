
import Layout from "../components/layout/Layout.jsx";

import  FeatureStore from "../store/FeatureStore.js";
import ProductStore from "../store/ProductStore.js";
import {useEffect} from "react";
import Slider from "../components/slider/Slider.jsx";
import Features from "../components/features/Features.jsx";
import Categories from "../components/categories/Categories.jsx";
import Product from "../components/product/Product.jsx";
import Brand from "../components/brand/Brand.jsx";
import CardStore from "../store/CardStor.js";
import UserStore from "../store/UserStor.js";


const HomePage = () => {

    let {FeatureStoreListRequest} = FeatureStore()
    let {  BrandStoreListRequest,CategoryListRequest, SliderListRequest, ProductListRequest} = ProductStore()
    let {userLogin} =  UserStore()
    let {CartListRequest} = CardStore()



    useEffect(() => {
        (
            async ()=>{
                if(userLogin()) {
                    await CartListRequest()
                }
                await FeatureStoreListRequest()
                await BrandStoreListRequest()
                await CategoryListRequest()
                await SliderListRequest()
                await ProductListRequest("new")

            }
        )()
    },[]);


    return (
        <Layout>
            <Slider />
            <Features />
            <Categories />
            <Product />
            <Brand />
        </Layout>
    );
};

export default HomePage;