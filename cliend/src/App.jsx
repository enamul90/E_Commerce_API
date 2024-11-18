import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductBuyBrand from "./pages/ProductBuyBrand.jsx";
import ProductByCategory from "./pages/ProductBuyCategory.jsx";
import ProductBuyKeyword from "./pages/ProductBuyKeyword.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import HowToBuyPage from "./pages/HowToBuyPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ComplainPage from "./pages/ComplainPage.jsx";
import RefundPage from "./pages/RefundPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/buy-brand/:id" element={<ProductBuyBrand />}/>
                <Route path="/buy-category/:id" element={<ProductByCategory />}/>
                <Route path="/buy-keyword" element={<ProductBuyKeyword />}/>
                <Route path="/product-detail/:id" element={<ProductDetailsPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/privacy" element={<PrivacyPage />}/>
                <Route path="/terms" element={<TermsPage />}/>
                <Route path="/refund" element={<RefundPage />}/>
                <Route path="/howtobuy" element={<HowToBuyPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/complain" element={<ComplainPage />}/>

            </Routes>

        </BrowserRouter>
    );
};

export default App;