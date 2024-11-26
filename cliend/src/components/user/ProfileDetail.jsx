import UserStore from "../../store/UserStor.js";
import {useEffect} from "react";
import ProfileLoader from "../../skeleton/ProfileLoader.jsx";
import toast from "react-hot-toast";

const ProfileDetail = () => {

    const {reqProfileData, profileData ,profileFromChange, updateProfileReq, userLogin} = UserStore()
    useEffect(() => {

        (async () => {

                if(userLogin()) {
                    await reqProfileData()

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
                                onChange={(e)=>profileFromChange("cus_name",e.target.value)}
                                value={profileData.cus_name}
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Phone </label>
                            <input
                                onChange={(e)=>profileFromChange("cus_phone",e.target.value)}
                                value={profileData.cus_phone}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Fax </label>
                            <input
                                onChange={(e)=>profileFromChange("cus_Fax",e.target.value)}
                                value={profileData.cus_Fax}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Country </label>
                            <input
                                onChange={(e)=>profileFromChange("cus_city",e.target.value)}
                                value={profileData.cus_city}
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
                                onChange={(e)=>profileFromChange("cus_State",e.target.value)}
                                value={profileData.cus_State}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Post Code </label>
                            <input
                                onChange={(e)=>profileFromChange("cus_postcode",e.target.value)}
                                value={profileData.cus_postcode}
                                type="text"
                                className="form-control "/>
                        </div>
                        <div className="col-md-3 p-2">
                            <label className="form-label">Customer Address</label>
                            <input
                                onChange={(e)=>profileFromChange("cus_add",e.target.value)}
                                value={profileData.cus_add}
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
                                onChange={(e)=>profileFromChange("ship_add",e.target.value)}
                                value={profileData.ship_add}
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