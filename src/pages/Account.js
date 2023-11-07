import React, { useState } from "react";
import Template from "../layouts/template";
import Menu from "../components/account/Menu";
import Orders from "../components/account/tabs/Orders";
import PersonalData from "../components/account/tabs/PersonalData";
import Recap from "../components/account/tabs/Recap";
import Wishlist from "../components/account/tabs/Wishlist";

export default function Account() {
    const [currentTab, setCurrentTab] = useState("Recap");
    const returnTab = () => {
        switch (currentTab) {
            case "Recap":
                return <Recap changeTab={setCurrentTab} />;
                break;

            case "Orders":
                return <Orders />;
                break;

            case "Personal data":
                return <PersonalData />;
                break;

            case "Wishlist":
                return <Wishlist />;
                break;

            default:
                break;
        }
    };

    

    return (
        <Template header={" bg-white"}>
            <>
                <Menu changeTab={setCurrentTab} currentTab={currentTab} />
                {returnTab()}
            </>
        </Template>
    );
}
