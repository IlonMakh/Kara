import React from "react";
import Promo from "../components/home/Promo";
import About from "../components/home/About";
import Offer from "../components/home/Offer";
import Template from "../layouts/template";

export default function Home() {
    return (
        <Template header={' p-fixed c-white bg-transparent'}>
            <>
                <Promo />
                <About />
                <Offer />
            </>
        </Template>
    );
}
