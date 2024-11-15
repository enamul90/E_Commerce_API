import React from 'react';
import AppNavbar from "./AppNavbar.jsx";
import Footer from "./Footer.jsx";


const Layout = (props) => {
    return (
        <>
            <AppNavbar />
            <div>{props.children}</div>
            <Footer />

        </>
    );
};

export default Layout;