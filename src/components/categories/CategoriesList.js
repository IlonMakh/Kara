import React, { useState } from "react";
import img from "../../assets/images/categories.jfif";
import { Link } from "react-router-dom";

export default function CategoriesList() {
    const [categories, setCategories] = useState({
        categories: [
            "Outerwear",
            "Trousers",
            "Skirts",
            "Dresses",
            "Shoes",
            "Bags",
        ],
        img: img,
    });
    return (
        <section className="categories">
            <div className="container">
                <div className="categories__names">
                    <ul className="categories__names-list">
                        {categories.categories.map((category) => (
                            <li key={category} className="categories__names-item">
                                <Link
                                    className="categories__names-link"
                                    to={"/catalog"}>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="categories__img">
                    <img
                        className="categories__img-bg"
                        src={categories.img}
                        alt="category-img"
                    />
                </div>
            </div>
        </section>
    );
}
