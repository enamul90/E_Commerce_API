
import icon from "../../assets/images/success.svg"
import {useNavigate} from "react-router-dom";

const ReviewPopup = () => {

    const navigate = useNavigate();
    const ReviewHandel = async ()=>{
        navigate("/")

    }

    return (
        <div className="review-container">

            <div className="success-card px-4 py-3 rounded-2 shadow-lg">

                <div className="text-center py-3">
                    <img className="successIcon" alt="...." src={icon}/>
                </div>

                <h3 className="text-center">Order Successfully</h3>
                <p className="px-5 text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

                <div className="text-center">
                    <button
                        onClick={ReviewHandel}
                        className="btn btn-success mt-4 mb-2"
                        type="submit">
                        Submit
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ReviewPopup;