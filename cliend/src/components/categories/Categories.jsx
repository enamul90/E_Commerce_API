import React from 'react';

import ProductStore from "../../store/ProductStore.js";
import CategoryLoader from "../../skeleton/CategoryLoader.jsx";
import {Link} from "react-router-dom";

const Categories = () => {

    let {CategoryList}=ProductStore()


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
                                                    <i className="bi bi-airplane-fill fs-2"></i>
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