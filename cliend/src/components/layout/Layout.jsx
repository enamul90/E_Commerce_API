import React from 'react';
import AppNavbar from "./AppNavbar.jsx";
import Footer from "./Footer.jsx";
import {Toaster} from "react-hot-toast";


const Layout = (props) => {
    return (
        <>
            <AppNavbar />
            <Toaster
                position="bottom-center"
            />
            <div>{props.children}</div>
            <Footer />

        </>
    );
};

export default Layout;