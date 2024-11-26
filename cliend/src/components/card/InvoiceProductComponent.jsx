import CardStore from "../../store/CardStor.js";
import img from "../../assets/images/img.png";


const InvoiceProductComponent = () => {

    const {InvoiceProductList, } = CardStore()

    if (InvoiceProductList ===null) {
        return <h2 className="text-center mt-5"> Loading........</h2>
    }

    else if(InvoiceProductList.length<1){
        return <h2 className="text-center mt-5">Wish Empty</h2>
    }



    else {
        return (
            <div className="container mt-4">

                <ul className="list-group list-group-flush"> {InvoiceProductList.map((item, i) => {
                    return (
                        <div key={i}>

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <img className="rounded-1" width="90" height="auto" src={img}/>
                                <div className="ms-2 me-auto">
                                    <p className="fw-lighter m-0 ">
                                        {/*Total Pride : {item['total']}*/}
                                    </p>
                                    <p className="fw-lighter my-1 w-75">
                                        {/*Payment Status : {item['payment_status']}*/}
                                    </p>
                                    <p className="fw-lighter my-1 w-75">
                                        {/*Delivery Status : {item['delivery_status']}*/}
                                    </p>
                                    <p className="fw-lighter my-1 w-75">
                                        {/*Customer : {item['cus_details']}*/}
                                    </p>
                                </div>

                                <div className="w-25 ms-auto text-end">
                                    <button
                                        // onClick={() => InvoiceDetailHandel(item['_id'])}
                                        className="btn btn-sm btn-outline-danger">
                                        Review
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

export default InvoiceProductComponent;