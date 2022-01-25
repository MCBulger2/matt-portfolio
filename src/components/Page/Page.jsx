import React from "react";

import "./page.scss";

const Page = (props) => {
    const {
        children,
        className
    } = props;

    return (
        <div className={`page ${className ? className : ""}`}>
            {children}
        </div>
    );
};

export default Page;