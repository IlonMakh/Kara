import React, { useState } from "react";

export default function SizeModal() {
    const product = {
        sizes: [
            {
                value: 36,
                isActive: true,
                isAvailable: true,
            },
            {
                value: 38,
                isActive: false,
                isAvailable: true,
            },
            {
                value: 40,
                isActive: false,
                isAvailable: false,
            },
            {
                value: 42,
                isActive: false,
                isAvailable: true,
            },
            {
                value: 44,
                isActive: false,
                isAvailable: false,
            },
        ],
    };
    const [sizes, setSizes] = useState(product.sizes);
    const itemClass = (size) => {
        return size.isActive ? "size-modal__content-item active" : "size-modal__content-item";
    };

    const changeActive = (value) => {
        const updatedSizes = sizes.map((size) => {
            if (size.value === value && !size.isActive) {
                size.isActive = true;
            } else if (size.isActive) {
                size.isActive = false;
            }
            return size;
        })
        setSizes(updatedSizes);
    }
    return (
        <div className="size-modal">
            <div className="size-modal__content">
                <button className="size-modal__close">
                    <svg className="size-modal__close-ico">
                        <use href="#close" />
                    </svg>
                </button>
                <div className="size-modal__content-info">
                    <h6 className="size-modal__content-title">Select a size</h6>
                    <div className="size-modal__content-list">
                        {sizes.map((size) => {
                            return (
                                <button key={size.value} className={itemClass(size)} disabled={!size.isAvailable} onClick={() => changeActive(size.value)}>
                                    {size.value}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
