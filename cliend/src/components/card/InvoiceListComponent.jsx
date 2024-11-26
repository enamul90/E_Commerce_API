
import img from "../../assets/images/img.png";
import CardStore from "../../store/CardStor.js";
import {useEffect} from "react";
import {useNavigate,} from "react-router-dom";
const InvoiceListComponent = () => {

    const navigate = useNavigate();

    const {InvoiceList, InvoiceListRequest} = CardStore()

    useEffect(() => {
        (
            async ()=>{
                await InvoiceListRequest();
            }
        )()
    }, []);


    const InvoiceDetailHandel =  (id)=>{
        navigate(`/invoiceProduct/${id}`)

    }


    if (InvoiceList ===null) {
        return <h2 className="text-center mt-5"> Loading........</h2>
    }

    else if(InvoiceList.length<1){
        return <h2 className="text-center mt-5">Wish Empty</h2>
    }



    else {
        return (
            <div className="container mt-4">

                <ul className="list-group list-group-flush"> {InvoiceList.map((item, i) => {
                    return (
                        <div key={i}>

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <img className="rounded-1" width="90" height="auto" src={img}/>
                                <div className="ms-2 me-auto">
                                    <p className="fw-lighter m-0 ">
                                        Total Pride : {item['total']}
                                    </p>
                                    <p className="fw-lighter my-1 w-75">
                                        Payment Status : {item['payment_status']}
                                    </p>
                                    <p className="fw-lighter my-1 w-75">
                                        Delivery Status : {item['delivery_status']}
                                    </p>
                                    <p className="fw-lighter my-1 w-75">
                                        Customer : {item['cus_details']}
                                    </p>
                                </div>

                                <div className="w-25 ms-auto text-end">
                                    <button
                                        onClick={() => InvoiceDetailHandel(item['_id'])}
                                        className="btn btn-sm btn-outline-danger">
                                        Invoice Details
                                    </button>
                                </div>

                            </li>
                        </div>
                    )

                })}
                </ul>


            </div>
        )

    }


};

export default InvoiceListComponent;