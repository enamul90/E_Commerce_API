import Layout from "../components/layout/Layout.jsx";
import CardStore from "../store/CardStor.js";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import InvoiceProductComponent from "../components/card/InvoiceProductComponent.jsx";


const InvoiceProductPage = () => {

    const {id} = useParams();
    const {InvoiceProductRequest, } = CardStore()

    useEffect(() => {
        (
            async ()=>{
               await InvoiceProductRequest(id)
            }
        )()
    },[])

    return (
        <Layout>

            <InvoiceProductComponent />

        </Layout>
    );
};

export default InvoiceProductPage;