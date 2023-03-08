import React, { Suspense, memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../utils/loader/loader";
import Home from "../components/home";

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="*" element={<Home />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default memo(Routers);
