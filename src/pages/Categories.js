import React from "react";
import CategoriesList from "../components/categories/CategoriesList";
import Template from "../layouts/template";

export default function Categories() {
    return (
        <Template header={' bg-white'}>
            <>
                <CategoriesList />
            </>
        </Template>
    );
}
