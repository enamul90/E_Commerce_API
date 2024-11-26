import WishStore from "../../store/WishStore.js";
import img from "../../assets/images/img.png";
import { useNavigate} from "react-router-dom";

const WishListComponent = () => {

    const navigate = useNavigate();

    const {WishList, RemoveWishRequest ,WishListRequest} = WishStore()

    const removeWishHandel = async (id)=>{

       let res =  await RemoveWishRequest(id)
        if(res){
           await  WishListRequest()
        }

    }

    const ProductDetailHandel =  (id)=>{
        navigate(`/product-detail/${id}`)

    }


    if (WishList ===null) {
        return <h2 className="text-center mt-5"> Loading........</h2>
    }

    else if(WishList.length<1){
        return <h2 className="text-center mt-5">Wish Empty</h2>
    }



    else {
        return (
            <div className="container mt-4">

                <ul className="list-group list-group-flush"> {WishList.map((item, i) => {
                    return (
                        <div key={i}>

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <img className="rounded-1" width="90" height="auto" src={img}/>
                                <div className="ms-2 me-auto">
                                    <p className="fw-lighter m-0 fw-bolder">{item['product']['title']}</p>
                                    <p className="fw-lighter my-1 w-75">
                                        {item['product']['shortDes']}
                                    </p>
                                    <p className="fw-lighter my-1 w-75">
                                        {item['product']['price']}
                                    </p>
                                </div>

                                <div className="w-25 ms-auto text-end">
                                    <button
                                        onClick={() => ProductDetailHandel(item['productID'])}
                                        className="btn btn-sm btn-outline-danger">
                                        Product Details
                                    </button>
                                    <span className="px-2"></span>
                                    <button
                                        onClick={() => removeWishHandel(item.productID)}
                                        className="btn btn-sm btn-outline-danger">
                                        <i className="bi bi-trash "></i>
                                    </button>
                                </div>

                            </li>
                        </div>
                    )

                })}
                </ul>


            </div>
        )
            ;
    }


};

export default WishListComponent;