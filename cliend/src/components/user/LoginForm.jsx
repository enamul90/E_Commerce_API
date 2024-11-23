import UserStore from "../../store/UserStor.js";
import {useState} from "react";
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const Navigate = useNavigate();

    const {loginFormValues,setLoginFormValues, UserOtpRequest}=UserStore()
    const [card, setCard] = useState(" ")

    const formHandel = async ()=>{
        if(ValidationHelper.IsEmail(loginFormValues)){
            setCard("opacity-25")
            const res = await UserOtpRequest(loginFormValues)
            setCard(" ")

            if(res){
                Navigate("/otp")

            }
            else {
                toast.error("Something went wrong ")
            }

        }
        else{
            toast.error("Email not valid ")
        }

    }



    return (

        <>
            <div className={`container section `}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="card p-5">
                            <h4>Enter Your Email</h4>
                            <p>A verification code will be sent to the email address you provide</p>
                            <input
                                onChange={(e)=>setLoginFormValues(e.target.value)}
                                value={loginFormValues}
                                placeholder="Email Address"
                                type="email"
                                className="form-control"
                            />

                            <button
                                onClick={formHandel}
                                className={`btn mt-3 btn-success ${card}`}
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

export default LoginForm;