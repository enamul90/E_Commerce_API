
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import ProductStore from "../../store/ProductStore.js";
import {useNavigate} from "react-router-dom";
import UserStore from "../../store/UserStor.js";
import Cookies from "js-cookie";
import CardStore from "../../store/CardStor.js";
import {useEffect} from "react";
import WishStore from "../../store/WishStore.js";


const AppNavbar = () => {

    let navigate = useNavigate()

    const {userLogin} = UserStore()
    const { setSearchKeyword,   searchKeyword,ProductListKeywordRequest}=ProductStore()
    const {signOut,}=UserStore()
    const {CartCount} = CardStore()
    const {WishCount} = WishStore()

    const search = async ()=>{

        if(searchKeyword ===null){
            navigate("/")
        }
        else {

            await ProductListKeywordRequest(searchKeyword)
            navigate("/buy-keyword")
            setSearchKeyword(null)
        }
    }

    const logOut = async ()=>{
        await signOut()
        Cookies.remove("token")
        sessionStorage.clear()
        navigate("/")
    }

    return (
        <div className="position-sticky top-0 z-3">
            <div className="container-fluid text-white p-2 bg-success">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                            <span>
                            <span className="f-12">
                            <i className="bi bi-envelope"></i> Support@PlanB.com </span>
                            <span className="f-12 mx-2">
                            <i className="bi bi-envelope"></i> 01774688159 </span>
                            </span>
                        </div>
                        <div className="col-md-6">
                            <span className="float-end">
                            <span className="bodySmal mx-2">
                            <i className="bi bi-whatsapp"></i>
                            </span>
                            <span className="bodySmal mx-2">
                            <i className="bi bi-youtube"></i>
                            </span>
                            <span className="bodySmal mx-2">
                            <i className="bi bi-facebook"></i>
                            </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={logo} alt="" width="40px"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06"
                            ariacontrols="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav06">
                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item me-4">
                            <Link className="nav-link" to="/">Home</Link>
                            </span>
                        </ul>
                    </div>
                    <div className=" d-lg-flex">
                        <div className="input-group">
                            <input onChange={(e)=>{setSearchKeyword(e.target.value)}} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <button onClick={search} className="btn btn-outline-dark" type="submit">
                               Search
                            </button>
                        </div>

                        {

                            userLogin()? (
                                    <>
                                        <Link to="/cart" type="button" className="btn ms-2 btn-light ">
                                            <span className="position-relative">
                                                <i className="bi text-dark bi-bag me-2 "></i>
                                                <p className="position-absolute top px-2 text-white bg-success rounded-5 dropdown  ">{CartCount}</p>
                                            </span>
                                        </Link>
                                        <Link to="/wish" type="button" className="btn ms-2 btn-light d-flex">
                                             <span className="position-relative">
                                                <i className="bi text-dark bi-heart"></i>
                                                <p className="position-absolute top px-2 text-white bg-info rounded-5 dropdown  ">{WishCount}</p>
                                            </span>
                                        </Link>
                                        <Link type="button" className="btn ms-3 btn-success d-flex"
                                              to="/profile">Profile</Link>
                                        <button onClick={logOut} type="button"
                                                className="btn ms-3 btn-success d-flex">Logout
                                        </button>
                                    </>
                            ):(
                                <Link type="button" className="btn ms-3 btn-success d-flex" to="/login">Login</Link>
                            )

                        }

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default AppNavbar;