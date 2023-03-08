import React from "react";
import "./loader.module.css";

const Loader: React.FC = () => {
    return (
        <div className="container">
            <div className="loaderDotCircle"></div>
        </div>
    );
};

export default Loader;