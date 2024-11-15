import {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import ProductCard from "../components/card/ProductCard.jsx";

const ProductByBrand = () => {

    const img = "https://img.freepik.com/free-vector/beautiful-cosmetic-ad_23-2148471068.jpg?t=st=1731591919~exp=1731595519~hmac=0d6e17b84eabe134f485b77e3d989d27de1db9a11897babd4a9832b16d43ad7a&w=740"

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <ProductCard img={img} />
                    </div>
                </div>

            </div>

        </Layout>
    );
};

export default ProductByBrand;