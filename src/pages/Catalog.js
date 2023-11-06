import React from "react";
import CardList from "../components/catalog/CardList";
import Template from "../layouts/template";
import img1 from '../assets/images/product_1.jpg';
import img2 from '../assets/images/product_2.jpg';
import img3 from '../assets/images/product_3.jpg';
import Panel from "../components/catalog/Panel";

export default function Catalog() {
    const cards = [
        {
            id: 0,
            images: [img1, img2, img3],
            isNew: true,
            title: "Short jacket",
            price: 50,
            amount: 1,
        },

        {
            id: 1,
            images: [img2, img1, img3],
            isNew: true,
            title: "Short jacket",
            price: 219,
            amount: 1,
        },

        {
            id: 2,
            images: [img3, img1, img2],
            isNew: true,
            title: "Short jacket",
            price: 340,
            amount: 1,
        },

        {
            id: 3,
            images: [img2, img1, img3],
            isNew: true,
            title: "Short jacket",
            price: 120,
            amount: 1,
        }
    ];

    return (
        <Template header={' bg-white'}>
            <>
                <Panel />
                <CardList cards={cards}/>
            </>
        </Template>
    );
}
