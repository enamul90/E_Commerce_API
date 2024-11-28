import ReviewStore from "../../store/ReviewStore.js";
import toast from "react-hot-toast";



const ReviewPopup = () => {

    const {ProductID, setOpenPopup, reviewFormData, reqReview ,setReviewFormData} =ReviewStore()

    const ReviewHandel = async ()=>{

        let res = await  reqReview(ProductID, reviewFormData)
        setOpenPopup("d-none")

        if(res){
            toast.success('review create successfully.')
        }

        else{
            toast.error('review create failed.')
        }



    }

    return (
        <div className="review-container">

            <div className="review-card px-4 py-3 rounded-2 shadow-lg">
                <h3 className="text-start mb-3">Enter Your Feedback</h3>
                <label className="form-label mb-2">Select Stare</label>
                <select
                    onChange={(e) =>setReviewFormData("rating", e.target.value)}
                    className="form-select form-select mb-3">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Fore</option>
                    <option value="5">Five</option>
                </select>

                <label
                    className="form-label mb-2">
                    Import Experience
                </label>
                <textarea
                    onChange={(e) =>setReviewFormData("des", e.target.value)}
                    className="form-control "
                    placeholder="Type Experience"
                    rows={5}/>

                <button
                    onClick={ReviewHandel}
                    className="btn btn-success
                    btn-block w-100 mt-4 mb-2"
                    type="submit">
                    Submit
                </button>

            </div>

        </div>
    );
};

export default ReviewPopup;