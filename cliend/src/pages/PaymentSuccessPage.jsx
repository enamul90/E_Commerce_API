import PaymentSuccessPopup from "../components/Uopup/PaymentSuccessPopup.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import PaymentStore from "../store/PaymcetStore.js";



const PaymentSuccessPage = () => {
    let {id} = useParams();
    // let {paymentSuccess} =PaymentStore()
    //
    // useEffect(() => {
    //     (
    //         async ()=>{
    //             await paymentSuccess(id)
    //         }
    //     )()
    //
    // }, [])

    console.log(id);

    return (
        <div>
            <PaymentSuccessPopup />
        </div>
    );
};

export default PaymentSuccessPage;