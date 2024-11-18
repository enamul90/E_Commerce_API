import Layout from "../components/layout/Layout.jsx";
import FeatureStore from "../store/FeatureStore.js";
import {useEffect} from "react";
import parser from "html-react-parser";

const TermsPage = () => {

    const {LegalData,legalDataRequest }=FeatureStore()

    useEffect(() => {
        (
            async ()=>{
                await legalDataRequest("terms")
            }
        )()
    },[]);

    return (
        <Layout>
            <div className="container pt-2">
                {
                    LegalData === null ? <h1>Loading....</h1> : parser(LegalData[0].description)
                }
            </div>
        </Layout>
    );
};

export default TermsPage;