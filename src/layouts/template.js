import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function template({ children, header }) {
    return (
        <>
            <Header classes={header}/>
            <main>{children}</main>
            <Footer />
        </>
    );
}
