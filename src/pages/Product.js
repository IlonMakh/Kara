import React from "react";
import img1 from "../assets/images/product_1.jpg";
import img2 from "../assets/images/product_2.jpg";
import img3 from "../assets/images/product_3.jpg";
import { useParams } from "react-router-dom";
import Slider from "../components/product/Slider";
import Template from "../layouts/template";
import Params from "../components/product/Params";
import Description from "../components/product/Description";
import Recommendations from "../components/product/Recommendations";

export default function Product() {
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
    const productId = +useParams().id;
    const currentCard = cards.find((card) => (card.id === productId));
    return (
        <Template header={''}>
            <>
                <Slider card={currentCard} />
                <Params card={currentCard} />
                <Description card={currentCard}/>
                <Recommendations recommendations={cards}></Recommendations>
            </>
        </Template>
    );
}
