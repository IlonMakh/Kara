import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function template({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
