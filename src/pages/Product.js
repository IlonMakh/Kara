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
            images: [img1, img2, img3, img2, img1],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
            description: "The absolute star of the new Black Sicily collection is black, the color of immortal elegance that encapsulates the most diverse facets of Dolce&Gabbana. They preserve the signature identity of the brand’s DNA, which is reworked in the light.",
        },

        {
            id: 1,
            images: [img1, img2, img3, img2, img1],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
            description: "The absolute star of the new Black Sicily collection is black, the color of immortal elegance that encapsulates the most diverse facets of Dolce&Gabbana. They preserve the signature identity of the brand’s DNA, which is reworked in the light.",
        },

        {
            id: 2,
            images: [img1, img2, img3, img2, img1],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
            description: "The absolute star of the new Black Sicily collection is black, the color of immortal elegance that encapsulates the most diverse facets of Dolce&Gabbana. They preserve the signature identity of the brand’s DNA, which is reworked in the light.",
        },

        {
            id: 3,
            images: [img1, img2, img3, img2, img1],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
            description: "The absolute star of the new Black Sicily collection is black, the color of immortal elegance that encapsulates the most diverse facets of Dolce&Gabbana. They preserve the signature identity of the brand’s DNA, which is reworked in the light.",
        },
    ];
    const productId = useParams().id;
    const currentCard = cards.find((card) => (card.id = productId));
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
