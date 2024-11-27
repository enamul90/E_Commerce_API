import React from 'react';

import ProductStore from "../../store/ProductStore.js";
import ProductDetailLoader from "../../skeleton/ProductDetailLoader.jsx";
import parse from 'html-react-parser'
import ProductGallery from "../card/ProductGallery.jsx";
import StarRatings from "react-star-ratings";
import CardStore from "../../store/CardStor.js";
import {useParams} from "react-router-dom";
import toast from "react-hot-toast";
import UserStore from "../../store/UserStor.js";
import WishStore from "../../store/WishStore.js";




const ProductDetails = () => {
    const {id} = useParams();

    const {productDetails, productReviewList} =  ProductStore()
    const {loading, setLoading, CartForm,CartFormChange,CartSaveRequest, CartListRequest} = CardStore()
    const {userLogin} = UserStore()
    const {createWishRequest, WishListRequest} = WishStore()

    console.log( productReviewList)
    const [qty, setQty] = React.useState(1);

    const addQty = () => {
        setQty(qty + 1);
    }
    const removeQty = () => {
        if(qty > 1){
            setQty(qty - 1);
        }
    }


    const CreateWishHandl = async () => {
        setLoading("opacity-25")
        const res = await createWishRequest(id)
        setLoading("opacity-100")
        if(res){
            await WishListRequest()
            toast.success("WishListComponent was created successfully.")
        }
        else {
            toast.error("WishListComponent was not created successfully.")
        }
    }

    const cardSaveHandel = async ()=>{
        setLoading("opacity-25")
        let res =  await CartSaveRequest(CartForm ,id,qty)
        setLoading("opacity-100")
        if(res){
            if(userLogin()) {
                await CartListRequest()
            }
            toast.success("Saved Card Successfully")
        }
        else {
            toast.error("something went wrong ")
        }
    }



    if(productDetails===null){
        return (
            <ProductDetailLoader />
        )
    }
    else {
        return (
            <>
                <div>
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-md-7 p-3">
                                <ProductGallery />
                            </div>
                            <div className="col-md-5 p-3">
                                <h4>{productDetails[0]["title"]}</h4>
                                <p className="text-muted bodySmal my-1"> Category : {productDetails[0]["category"]['categoryName']}</p>
                                <p className="text-muted bodySmal my-1"> Brand : {productDetails[0]["brand"]['brandName']}</p>
                                <p className="bodySmal mb-2 mt-1">{productDetails[0]["shortDes"]}</p>
                                {
                                    productDetails[0]["discount"] === true ?
                                        <span><strike
                                            class="text-secondary">{productDetails[0]["price"]}</strike> {productDetails[0]["discountPrice"]} </span>
                                        :
                                        <span>{productDetails[0]["price"]} </span>
                                }

                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label className="bodySmal">Size</label>
                                        <select
                                            onChange={(e)=>{CartFormChange("size", e.target.value)}}
                                            className="form-control my-2 form-select">
                                            {
                                                productDetails[0]["productDetail"]["size"].split(",").map((size) => {
                                                    return (
                                                        <option value={size}>{size}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label className="bodySmal">Color</label>
                                        <select
                                            onChange={(e)=>{CartFormChange("color", e.target.value)}}
                                            className="form-control my-2 form-select">
                                            {
                                                productDetails[0]["productDetail"]["color"].split(",").map((color) => {
                                                    return (
                                                        <option value={color}>{color}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label className="bodySmal">Quantity</label>
                                        <div className="input-group my-2">
                                            <button onClick={removeQty} className="btn btn-outline-secondary">-</button>
                                            <input value={qty} type="text" className="form-control bg-light text-center" readOnly/>
                                            <button onClick={addQty} className="btn btn-outline-secondary">+</button>
                                        </div>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button
                                            className= {`btn w-100 btn-success ${loading}`}
                                            onClick={cardSaveHandel}
                                            >
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button
                                            onClick={CreateWishHandl}
                                            className={`btn w-100 btn-success ${loading}`}>
                                            Add to Wish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="Speci-tab" data-bs-toggle="tab" data-bs-target="#Speci-tab-pane"
                                        type="button" role="tab" aria-controls="Speci-tab-pane" aria-selected="true"
                                    >
                                        Specifications
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link" id="Review-tab" data-bs-toggle="tab" data-bs-target="#Review-tab-pane"
                                        type="button" role="tab" aria-controls="Review-tab-pane" aria-selected="false"
                                    >
                                        Review
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel"
                                    aria-labelledby="Speci-tab" tabIndex="0"
                                >

                                    {
                                        parse(productDetails[0]['productDetail']?.des)
                                    }
                                </div>
                                <div
                                    className="tab-pane fade" id="Review-tab-pane" role="tabpanel"
                                    aria-labelledby="Review-tab" tabIndex="0"
                                >

                                    {
                                        productReviewList === null ? <h3>Loading...</h3> :
                                            productReviewList.map((item, index) => {
                                                const rating = parseInt(item.rating);
                                                return (
                                                    <div className="mt-4 bg-white shadow p-3 rounded" key={index}>
                                                        <span className='d-flex m-0 p-0'>
                                                            <i className="bi bi-person-fill"></i>
                                                            <h5 className='ms-2 fs-6'>{item['Profile']["cus_name"]}</h5>
                                                        </span>
                                                        <p className='m-0 p-0'>{item.des}</p>
                                                        <StarRatings
                                                            rating={rating}
                                                            starDimension="20px"
                                                            starSpacing="10px"
                                                        />
                                                    </div>
                                                )
                                            })
                                    }
                                    <ul className="list-group list-group-flush"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

};

export default ProductDetails;