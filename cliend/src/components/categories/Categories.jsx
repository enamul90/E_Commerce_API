import React from 'react';

import ProductStore from "../../store/ProductStore.js";
import CategoryLoader from "../../skeleton/CategoryLoader.jsx";
import {Link} from "react-router-dom";

const Categories = () => {

    let {CategoryList}=ProductStore()
    let Data = "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/464628204_576193254805982_8327469153857007666_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=G3o3uIVRLIoQ7kNvgFVmdpu&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=AAlgDMTfREPWy2vUbzntenA&oh=00_AYCspghaqTcqIFrxp6FzyCS5fts_wfFIJDUgV_eR23VEKg&oe=673976FF"

    if(CategoryList== null){
        return (
            <CategoryLoader/>
        )
    }

    else {

        return (
            <>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <h1 className="headline-4 text-center my-2 p-0">Top Categories</h1>
                            <span className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br
                            />Shopping Categories </span>

                            {
                                CategoryList.map((item, i) => {
                                    return (
                                        <div key={i} className="col-2 col-lg-8r text-center col-md-8r p-2">
                                            <Link to={`/buy-category/${item._id}`} className="card h-100 rounded-3 bg-light">
                                                <div className="card-body">
                                                    <img alt="" className="w-75" src={Data}/>
                                                    <p className="bodySmal mt-3">{item.categoryName}</p>
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

export default Categories;