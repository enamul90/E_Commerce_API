import UserStore from "../../store/UserStor.js";
import {useEffect} from "react";
import ProfileLoader from "../../skeleton/ProfileLoader.jsx";
import Cookies from 'js-cookie';

const ProfileDetail = () => {
    let token = Cookies.get("token");

    const {reqProfileData, profileData,setToken, Token } = UserStore()
    useEffect(() => {

        (async () => {
            {
                token?  await reqProfileData() : null
            }
        })()
    }, []);

    if(profileData == null){
        return <ProfileLoader />
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card p-5 rounded-3">
                    <h6>Customer Details</h6>
                    <hr/>
                    <div className="row mb-4">
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Name </label>
                            <input type="text" value={profileData['0'].cou_name} className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Phone </label>
                            <input  value={profileData['0'].cus_Phone} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Fax </label>
                            <input value={profileData['0'].cou_Fax} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Country </label>
                            <input value={profileData['0'].cou_country} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer City </label>
                            <input value={profileData['0'].cus_city} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer State </label>
                            <input value={profileData['0'].cou_State} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Post Code </label>
                            <input value={profileData['0'].cou_postcode} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Address</label>
                            <input value={profileData['0'].cus_Add} type="text" className="form-control "/>
                        </div>
                    </div>
                    <h6>Shipping Details</h6>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Name </label>
                            <input value={profileData['0'].ship_name} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Phone </label>
                            <input value={profileData['0'].ship_phone} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Fax </label>
                            <input value={profileData['0'].ship_Fax} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Country </label>
                            <input value={profileData['0'].ship_country} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping City </label>
                            <input value={profileData['0'].ship_city} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping State </label>
                            <input value={profileData['0'].ship_State} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Post Code </label>
                            <input value={profileData['0'].ship_postcode} type="text" className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Address</label>
                            <input value={profileData['0'].ship_Add} type="text" className="form-control "/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-3 p-2">
                            <button className="btn btn-success">Update Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileDetail;