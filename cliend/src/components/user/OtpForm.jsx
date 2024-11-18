import {useNavigate} from "react-router-dom";
import UserStore from "../../store/UserStor.js";
import {useState} from "react";
import toast from "react-hot-toast";
import ValidationHelper from "../../utility/ValidationHelper.js";


const OtpForm = () => {

    const Navigate = useNavigate();

    const {otpFormValues,setOtpFormValues,  VerifyLoginRequest}=UserStore()
    const [card, setCard] = useState(" ")

    const formHandel = async ()=> {

        if(!ValidationHelper.IsEmpty(otpFormValues) ){
            setCard("opacity-25")
            const res = await VerifyLoginRequest(otpFormValues)
            setCard(" ")

            if (res) {
                Navigate("/")

            } else {
                toast.error("Something went wrong ")
            }
        }
        else {
            toast.error("Something went wrong ")
        }



    }




    return (
        <>
            <div className={`container section ${card}`}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="card p-5">
                            <h4>Enter Verification Code</h4>
                            <p>A verification code has been sent to the email address you provide</p>
                            <input
                                value={otpFormValues}
                                onChange={(e)=>setOtpFormValues(e.target.value)}
                                placeholder="Enter Your Otp"
                                type="email"
                                className="form-control"/>
                            <button
                                onClick={formHandel}
                                className="btn mt-3 btn-success"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtpForm;