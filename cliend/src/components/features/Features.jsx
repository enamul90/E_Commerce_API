import React from 'react';
import FeatureStore from "../../store/FeatureStore.js";
import FeaturesLoader from "../../skeleton/FeaturesLoader.jsx";


const Features = () => {
    let { FeatureList} = FeatureStore()
    let Data = "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/461845609_1730374744415600_8801135535405918223_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xhr6bu4PgjAQ7kNvgGBa49r&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=AIFaoYInWi6EqE5tG05t9Sv&oh=00_AYCB1w4HQf_c4GFCPhbnjnShz5qeLiOedUsPUlnTL8gIog&oe=673FC8E1"

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