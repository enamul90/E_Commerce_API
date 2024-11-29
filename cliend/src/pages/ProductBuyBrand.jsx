import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import ProductCard from "../components/card/ProductCard.jsx";
import ProductFilter from "../components/product/ProductFilter.jsx";

const ProductBuyBrand = () => {
    let { ProductListBrandRequest} = ProductStore()
    const id =useParams().id;

    useEffect(() => {
        (
            async ()=>{
                await ProductListBrandRequest(id)
            }
        )()
    }, []);

    const img = "https://img.freepik.com/free-vector/pastel-podium-3d-effect_52683-43797.jpg?t=st=1731592284~exp=1731595884~hmac=4f068d777e86198d80da160afde9d1f1832d60f5a30c87fa59a453b0c4bb176b&w=1380"

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ProductFilter />
                    </div>
                    <div className="col-md-9">
                            <ProductCard img={img} />
                    </div>
                </div>

            </div>
            
        </Layout>
    );
};

export default ProductBuyBrand;