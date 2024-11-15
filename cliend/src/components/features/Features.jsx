import React from 'react';
import FeatureStore from "../../store/FeatureStore.js";
import FeaturesLoader from "../../skeleton/FeaturesLoader.jsx";


const Features = () => {
    let { FeatureList} = FeatureStore()
    let Data = "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/464628204_576193254805982_8327469153857007666_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=G3o3uIVRLIoQ7kNvgFVmdpu&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=AAlgDMTfREPWy2vUbzntenA&oh=00_AYCspghaqTcqIFrxp6FzyCS5fts_wfFIJDUgV_eR23VEKg&oe=673976FF"

    if(FeatureList == null) {
        return (
            <FeaturesLoader />
        )
    }

    else {
        return (
            <>
                <div className="container section">
                    <div className="row">

                        {
                            FeatureList.map((item, i) => {
                                return (

                                    <div key={i} className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                                        <div className="card shadow-sm">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <img className="w-100 rounded-5" src={Data}/>
                                                    </div>
                                                    <div className="col-9">
                                                        <h3 className="bodyXLarge">{item.name}</h3>
                                                        <span className="bodySmal">{item.description}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>

            </>
        );
    }

};

export default Features;