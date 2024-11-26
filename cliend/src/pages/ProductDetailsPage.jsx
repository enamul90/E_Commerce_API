import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Categories from "../components/categories/Categories.jsx";
import ProductDetails from "../components/product/ProductDetails.jsx";
import ProductStore from "../store/ProductStore.js";

const ProductDetailsPage = () => {

    const {id} = useParams();

    const {productDetailsRequest, productReviewRequest, CategoryListRequest, CategoryList,} = ProductStore()

    useEffect(()=>{

        (
            async ()=>{
                await productDetailsRequest(id);
                await productReviewRequest(id);
                CategoryList ==null? await CategoryListRequest(): null
            }
        )()

    },[])



    return (
        <Layout>
            <ProductDetails />
            <Categories />

        </Layout>
    );
};

export default ProductDetailsPage;