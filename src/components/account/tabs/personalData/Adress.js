import React, { useState } from "react";

export default function Adress() {
    const [isEditMode, setIsEditMode] = useState(false);
    const [adressData, setAdressData] = useState({
        country: "",
        city: "",
        adress: "",
        zip: "",
    });
    const [adresses, setAdresses] = useState([]);

    const applyAdress = (e) => {
        e.preventDefault();

        const updatedCards = [...adresses, adressData];
        setAdresses(updatedCards);

        setAdressData({
            country: "",
            city: "",
            adress: "",
            zip: "",
        });

        setIsEditMode(false);
    };

    const cancelEdit = (e) => {
        setIsEditMode(false);
        setAdressData({
            country: "",
            city: "",
            adress: "",
            zip: "",
        });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        setAdressData((prevAdressData) => ({
            ...prevAdressData,
            [id]: value,
        }));
    };

    const handleDeleteAdress = (index) => {
        const updatedAdresses = [...adresses];
        updatedAdresses.splice(index, 1);
        setAdresses(updatedAdresses);
    };

    return (
        <div className="account__personal-adress">
            {!!adresses.length && (
                <div className="account__personal-adress-list">
                    {adresses.map((adress, index) => {
                        return (
                            <div
                                className="account__personal-adress-card"
                                key={adress.zip}>
                                <p className="account__personal-adress-country">
                                    {adress.country}, {adress.city}
                                </p>
                                <p className="account__personal-adress-street">
                                    {adress.adress}, {adress.zip}
                                </p>
                                <button
                                    className="account__personal-adress-delete"
                                    onClick={() => handleDeleteAdress(index)}>
                                    Delete adress
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
            {!isEditMode ? (
                <button
                    className="account__personal-adress-add"
                    onClick={() => setIsEditMode(true)}>
                    + Add adress
                </button>
            ) : (
                <form className="account__personal-form" onSubmit={applyAdress}>
                    <div className="account__personal-adress-item">
                        <div className="account__personal-adress-country">
                            <label
                                htmlFor="country"
                                className="account__personal-label">
                                Country
                            </label>
                            <input
                                id="country"
                                className="account__personal-input"
                                type="text"
                                defaultValue={adressData.country}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="account__personal-adress-city">
                            <label
                                htmlFor="city"
                                className="account__personal-label">
                                City
                            </label>
                            <input
                                id="city"
                                className="account__personal-input"
                                type="text"
                                defaultValue={adressData.city}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="account__personal-adress-item">
                        <div className="account__personal-adress-adress">
                            <label
                                htmlFor="adress"
                                className="account__personal-label">
                                Adress
                            </label>
                            <input
                                id="adress"
                                className="account__personal-input"
                                type="text"
                                defaultValue={adressData.adress}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="account__personal-adress-zip">
                            <label
                                htmlFor="zip"
                                className="account__personal-label">
                                Zip code
                            </label>
                            <input
                                id="zip"
                                className="account__personal-input"
                                type="text"
                                defaultValue={adressData.zip}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="account__personal-btns">
                        <button
                            className="account__personal-apply"
                            type="submit">
                            Apply
                        </button>
                        <button
                            className="account__personal-cancel"
                            onClick={cancelEdit}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
