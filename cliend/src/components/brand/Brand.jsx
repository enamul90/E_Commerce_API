import React from 'react';
import ProductStore from "../../store/ProductStore.js"
import BrandsLoader from "../../skeleton/BrandsLoader.jsx";
import {Link} from "react-router-dom";

const Brand = () => {

    let {BrandList} =  ProductStore()

    if(BrandList == null) {
        return (
            <BrandsLoader />
        )
    }

    else {
        return (
            <>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
                            <span className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br
                            />Shopping Categories </span>

                            {
                                BrandList.map((brand, i) => {
                                    return (
                                        <div key={i} className=" col-2 col-lg-8r text-center col-md-8r p-2">
                                            <Link to={`/buy-brand/${brand._id}`} className="card h-100 rounded-3 bg-light">
                                                <div className="card-body">
                                                    <i className="bi bi-tablet fs-1"></i>
                                                    <p className="bodySmal mt-3">{brand.brandName} </p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </>
        );
    }


};

export default Brand;