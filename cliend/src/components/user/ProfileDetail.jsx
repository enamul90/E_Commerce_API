import UserStore from "../../store/UserStor.js";
import {useEffect} from "react";
import ProfileLoader from "../../skeleton/ProfileLoader.jsx";
import Cookies from 'js-cookie';
import toast from "react-hot-toast";

const ProfileDetail = () => {
    let token = Cookies.get("token");

    const {reqProfileData, profileData ,profileFromChange, updateProfileReq} = UserStore()
    useEffect(() => {

        (async () => {
            {
                token?  await reqProfileData() : null
            }
        })()
    }, []);


    const updateProfileHandel = async ()=>{

        await updateProfileReq(profileData)
        await reqProfileData()
        toast.success("Profile updated successfully")

    }



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
                            <input
                                type="text"
                                onChange={(e)=>profileFromChange("cou_name",e.target.value)}
                                value={profileData.cou_name}
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Phone </label>
                            <input
                                onChange={(e)=>profileFromChange("cus_Phone",e.target.value)}
                                value={profileData.cus_Phone}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Fax </label>
                            <input
                                onChange={(e)=>profileFromChange("cou_Fax",e.target.value)}
                                value={profileData.cou_Fax}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Country </label>
                            <input
                                onChange={(e)=>profileFromChange("cou_country",e.target.value)}
                                value={profileData.cou_country}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer City </label>
                            <input
                                onChange={(e)=>profileFromChange("cus_city",e.target.value)}
                                value={profileData.cus_city}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer State </label>
                            <input
                                onChange={(e)=>profileFromChange("cou_State",e.target.value)}
                                value={profileData.cou_State}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Post Code </label>
                            <input
                                onChange={(e)=>profileFromChange("cou_postcode",e.target.value)}
                                value={profileData.cou_postcode}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Address</label>
                            <input
                                onChange={(e)=>profileFromChange("cus_Add",e.target.value)}
                                value={profileData.cus_Add}
                                type="text"
                                className="form-control "/>
                        </div>
                    </div>
                    <h6>Shipping Details</h6>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Name </label>
                            <input
                                onChange={(e)=>profileFromChange("ship_name",e.target.value)}
                                value={profileData.ship_name}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Phone </label>
                            <input
                                onChange={(e)=>profileFromChange("ship_phone",e.target.value)}
                                value={profileData.ship_phone}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Fax </label>
                            <input
                                onChange={(e)=>profileFromChange("ship_Fax",e.target.value)}
                                value={profileData.ship_Fax}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Country </label>
                            <input
                                onChange={(e)=>profileFromChange("ship_country",e.target.value)}
                                value={profileData.ship_country}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping City </label>
                            <input
                                onChange={(e)=>profileFromChange("ship_city",e.target.value)}
                                value={profileData.ship_city}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping State </label>
                            <input
                                onChange={(e)=>profileFromChange("ship_State",e.target.value)}
                                value={profileData.ship_State}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Post Code </label>
                            <input
                                onChange={(e)=>profileFromChange("ship_postcode",e.target.value)}
                                value={profileData.ship_postcode}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Shipping Address</label>
                            <input
                                onChange={(e)=>profileFromChange("ship_Add",e.target.value)}
                                value={profileData.ship_Add}
                                type="text"
                                className="form-control "/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-3 p-2">
                            <button
                                onClick={updateProfileHandel}
                                className="btn btn-success">
                                Update Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileDetail;