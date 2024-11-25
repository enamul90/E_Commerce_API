import Layout from "../components/layout/Layout.jsx";
import WishStore from "../store/WishStore.js";
import {useEffect} from "react";
import WishListComponent from "../components/wish/WishListComponent.jsx";

const WishListPage = () => {

    const {WishListRequest} = WishStore()

    useEffect(()=>{

        (
           async ()=>{
               await WishListRequest()
           }
        )()

    },[])


    return (
        <Layout>
            <WishListComponent />

        </Layout>
    );
};

export default WishListPage;