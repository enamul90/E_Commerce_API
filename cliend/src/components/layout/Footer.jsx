import React from 'react';
import {Link} from "react-router-dom";
import payment from "../../assets/images/paymenticon.png"

const Footer = () => {
    return (
        <>

            <div className="shadow-lg">
                <div className="section-bottom shadow-sm bg-white ">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-4">
                                <h1 className="bodyMedium fs-5">Legals</h1>
                                <p className="my-2">
                                    <Link className="nav-link" to="/">About</Link>
                                </p>
                                <p className="my-2">
                                    <Link className="nav-link" to="/">Refund Policy</Link>
                                </p>
                                <p className="my-2">
                                    <Link className="nav-link" to="/">Terms</Link>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1 className="bodyMedium fs-5">Information</h1>
                                <p className="my-2">
                                    <Link className="nav-link" to="/">How to buy</Link>
                                </p>
                                <p className="my-2">
                                    <Link className="nav-link" to="/">Contact</Link>
                                </p>
                                <p className="my-2">
                                    <Link className="nav-link" to="/">Complain</Link>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1 className="bodyMedium fs-5">About</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum </p>
                                <img alt="he" className="w-75 mt-2" src={payment}/>
                            </div>
                        </div>
                    </div>
                </div>

                    <p className="text-white bodySmal bg-dark py-3 text-center">All Rights Reserved </p>
            </div>

        </>
    );
};

export default Footer;