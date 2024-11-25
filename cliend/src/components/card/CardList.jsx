import CardStore from "../../store/CardStor.js";
import {useEffect} from "react";
import img from "../../assets/images/img.png"
import UserStore from "../../store/UserStor.js";
import ProductStore from "../../store/ProductStore.js";
const CardList = () => {

    const  { CartListRequest, CartList,CartTotal, CartVatTotal, CartPayableTotal,RemoveCartListRequest} = CardStore()
    const {userLogin} = UserStore()


    useEffect(() => {
        (
            async ()=>{
                if(userLogin()) {
                    await CartListRequest()
                }
            }
        )()
    }, []);


    const removeCardHandel = async (e)=>{
        await RemoveCartListRequest(e)
        await CartListRequest()

    }


    if(CartList === null){
        return (
            <h1 className="text-center mt-5">Loading .....</h1>
        )
    }

    else if(CartList.length<1){
        return (
            <h1 className="text-center mt-5"> Card Empty </h1>
        )
    }


    else {
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card p-4">
                                <ul className="list-group list-group-flush"> { CartList.map((item,i)=>{ return( <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <img className="rounded-1" width="90" height="auto" src={img} />
                                    <div className="ms-2 me-auto">
                                        <p className="fw-lighter m-0">{item['product']['title']}</p>
                                        <p className="fw-lighter my-1">Unit Price: {item['product']['price']} ,Qty: {item['qty']}, Size: {item['size']},
                                            Color: {item['color']}</p>
                                        <p className=" h6 fw-bold m-0 text-dark">Total <i className="bi bi-currency-dollar"></i>
                                            {parseInt(item['product']['price'])*parseInt(item['qty'])} </p>
                                    </div>
                                    <button
                                        onClick={()=>removeCardHandel(item['_id'])}
                                        className="btn btn-sm btn-outline-danger">
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </li> ) }) } </ul>
                                <div className="my-4">
                                    <ul className="list-group bg-transparent list-group-flush">
                                        <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                            <span className="float-end">Total: <i className="bi bi-currency-dollar" />{CartTotal} </span>
                                        </li>
                                        <li className="list-group-item bg-transparent h6 m-0 text-dark"><span className="float-end"> Vat(5%): <i className="bi bi-currency-dollar" />{CartVatTotal}</span>
                                        </li>
                                        <li className="list-group-item bg-transparent h6 m-0 text-dark"><span className="float-end"> Payable: <i className="bi bi-currency-dollar" />{CartPayableTotal}</span>
                                        </li>
                                        <li
                                            className="list-group-item bg-transparent ">
                                            <span className="float-end">
                                                <button
                                                    // onClick={async ()=> {await CreateInvoiceRequest()}}
                                                    className="btn px-5 mt-2 btn-success">
                                                    Check out
                                                </button>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

};

export default CardList;