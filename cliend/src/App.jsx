import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductBuyBrand from "./pages/ProductBuyBrand.jsx";
import ProductByCategory from "./pages/ProductBuyCategory.jsx";
import ProductBuyKeyword from "./pages/ProductBuyKeyword.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/buy-brand/:id" element={<ProductBuyBrand />} />
                <Route path="/buy-category/:id" element={<ProductByCategory />} />
                <Route path="/buy-keyword" element={<ProductBuyKeyword/>} />
                <Route path="/product-detail/:id" element={<ProductDetailsPage/>} />
                <Route path="*" element={<HomePage />} />
            </Routes>

        </BrowserRouter>
    );
};

export default App;