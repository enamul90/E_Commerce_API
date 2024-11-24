import Layout from "../components/layout/Layout.jsx";
import WishStore from "../store/WishStore.js";
import {useEffect} from "react";

const WishListPage = () => {

    const {WishListRequest, WishList} = WishStore()

    useEffect(()=>{

        (
           async ()=>{
               await WishListRequest()
           }
        )()

    },[])


    return (
        <Layout>
            <h1> Wish list page .....</h1>
            {/*<p>{WishList[0].title}</p>*/}

        </Layout>
    );
};

export default WishListPage;