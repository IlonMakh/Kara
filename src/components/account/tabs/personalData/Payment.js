import React, { useState } from "react";

export default function Payment() {
    const [isEditMode, setIsEditMode] = useState(false);
    const [cardData, setCardData] = useState({
        name: "",
        type: "Visa",
        number: "",
        expires: "",
    });
    const [cards, setCards] = useState([]);

    const applyCard = (e) => {
        e.preventDefault();
        const updatedCards = [...cards, cardData];
        setCards(updatedCards);
        
        setCardData({
            name: "",
            type: "Visa",
            number: "",
            expires: "",
        });

        setIsEditMode(false);
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        setCardData(prevCardData => ({
            ...prevCardData,
            [id]: value
        }));
    }

    const cancelEdit = (e) => {
        setIsEditMode(false);
        setCardData({
            name: "",
            type: "Visa",
            number: "",
            expires: "",
        });
    }

    const handleDeleteCard = (index) => {
        const updatedCards = [...cards];
        updatedCards.splice(index, 1);
        setCards(updatedCards);
    };

    const hideSensitiveInfo = (inputString) => {
        if (typeof inputString !== 'string' || inputString.length <= 4) {
            return inputString;
        }
        
        const hiddenPart = '*'.repeat(inputString.length - 4);
        const visiblePart = inputString.slice(-4);
        
        return hiddenPart + visiblePart;
    }


    return (
        <div className="account__personal-payment">
            {!!cards.length && (
                <div className="account__personal-payment-cards">
                    {cards.map((card, index) => {
                        return (
                            <div className="account__personal-payment-card" key={card.number}>
                                <p className="account__personal-payment-cardholder">{card.name}</p>
                                <p className="account__personal-payment-credits">{card.type} {hideSensitiveInfo(card.number)}</p>
                                <p className="account__personal-payment-expires">Expires {card.expires}</p>
                                <button className="account__personal-payment-delete" onClick={() => handleDeleteCard(index)}>Delete card</button>
                            </div>
                        )
                    })}
                </div>
            )}
            {!isEditMode ?
            (<button className="account__personal-payment-add" onClick={() => setIsEditMode(true)}>
                + Add credit card
            </button>): 
            (<form className="account__personal-form" onSubmit={applyCard}>
                <div className="account__personal-payment-item">
                    <div className="account__personal-payment-name">
                        <label
                            htmlFor="name"
                            className="account__personal-label">
                            Name on card<sup>*</sup>
                        </label>
                        <input
                            id="name"
                            className="account__personal-input"
                            type="text"
                            defaultValue={cardData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="account__personal-payment-type">
                        <label className="account__personal-label">
                            Type<sup>*</sup>
                        </label>
                        <select className="account__personal-select" id="type" defaultValue={cardData.type}
                                onChange={handleInputChange} >
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="MIR">MIR</option>
                        </select>
                    </div>
                </div>
                <div className="account__personal-payment-item">
                    <div className="account__personal-payment-name">
                        <label
                            htmlFor="number"
                            className="account__personal-label">
                            Card number<sup>*</sup>
                        </label>
                        <input
                            id="number"
                            className="account__personal-input"
                            type="text"
                            defaultValue={cardData.number}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="account__personal-payment-type">
                        <label  htmlFor="expires" className="account__personal-label">
                            Expires<sup>*</sup>
                        </label>
                        <input
                            id="expires"
                            className="account__personal-input"
                            type="month"
                            defaultValue={cardData.expires}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="account__personal-btns">
                    <button className="account__personal-apply" type="submit">Apply</button>
                    <button className="account__personal-cancel" onClick={cancelEdit}>Cancel</button>
                </div>
            </form>)}
        </div>
    );
}
