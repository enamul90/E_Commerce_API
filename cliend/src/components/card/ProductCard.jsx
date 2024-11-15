import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";

import ProductsLoader from "../../skeleton/ProductsLoader.jsx";


const ProductCard = (props) => {
    let { BuyList} = ProductStore()

    return (

        <>
            <div className="container py-2">
                <div className="row">
                    {
                        BuyList===null? <ProductsLoader />:
                        BuyList.map((item, index) => {
                            let rating = parseInt(item.star)
                            return (
                                <div key={index}
                                     className="col-md-3 p-2 col-lg-3 col-sm-6 col-12 link-underline-opacity-0">
                                    <Link to={`/product-detail/${item._id}`}
                                          className="card shadow-sm h-100 rounded-3 bg-white">
                                        <img className="w-100 rounded-top-2" src={props.img}/>
                                        <div className="card-body">
                                            <p className="bodySmal text-secondary my-1">{item.title}</p>
                                            <p className="bodyMedium text-dark my-1">{item.price} </p>
                                            <StarRatings rating={rating} starRatedColor="red"
                                                         starDimension="15px"
                                                         starSpacing="2px"/>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
};

export default ProductCard;