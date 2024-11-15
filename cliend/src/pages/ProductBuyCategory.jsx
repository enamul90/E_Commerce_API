import {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import ProductCard from "../components/card/ProductCard.jsx";

const ProductByBrand = () => {
    let { ProductListCategoryRequest} = ProductStore()
    const id =useParams().id;

    useEffect(() => {
        (
            async ()=>{
                await ProductListCategoryRequest(id)
            }
        )()
    }, []);

    const img = "https://img.freepik.com/free-photo/vertical-banners-sales_23-2150629837.jpg?t=st=1731592114~exp=1731595714~hmac=6b4acc3abf96012ddded7687af8db4d61e626d12c4dfc0ffef4f5f5fd9d73088&w=740"
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