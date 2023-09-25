import React, { useRef, useState } from "react";
import img from "../../assets/images/product_2.jpg";
import SimpleBar from "simplebar-react";

export default function ColorModal() {
    const product = {
        colors: [
            {
                value: "black",
                isActive: true,
                isAvailable: true,
                img,
            },
            {
                value: "red",
                isActive: false,
                isAvailable: true,
                img,
            },
            {
                value: "grey",
                isActive: false,
                isAvailable: false,
                img,
            },
            {
                value: "grey2",
                isActive: false,
                isAvailable: true,
                img,
            },
            {
                value: "grey3",
                isActive: false,
                isAvailable: true,
                img,
            },
        ],
    };
    const [colors, setColors] = useState(product.colors);
    const itemClass = (color) => {
        return color.isActive
            ? "color-modal__content-item active"
            : "color-modal__content-item";
    };

    const changeActive = (value) => {
        const updatedSizes = colors.map((color) => {
            if (color.value === value && !color.isActive) {
                color.isActive = true;
            } else if (color.isActive) {
                color.isActive = false;
            }
            return color;
        });
        setColors(updatedSizes);
    };

    const simpleBarRef = useRef(null);

    const handleMouseWheel = (e) => {
        // Проверяем, что SimpleBar инициализирован
        console.log(simpleBarRef)
        if (simpleBarRef.current) {
            const deltaY = e.deltaY;
            const scrolledEl = simpleBarRef.current.contentWrapperEl;
            scrolledEl.scroll({
                left: scrolledEl.scrollLeft + deltaY,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="color-modal">
            <div className="color-modal__content" >
                <button className="color-modal__close">
                    <svg className="color-modal__close-ico">
                        <use href="#close" />
                    </svg>
                </button>
                <div className="color-modal__content-info">
                    <h6 className="color-modal__content-title">
                        Select a color
                    </h6>
                    <SimpleBar ref={simpleBarRef} style={{ maxWidth: "100%", visibility: "visible" }} onWheel={handleMouseWheel}>
                        <div className="color-modal__content-list">
                            {colors.map((color) => {
                                return (
                                    <button
                                        key={color.value}
                                        className={itemClass(color)}
                                        disabled={!color.isAvailable}
                                        onClick={() =>
                                            changeActive(color.value)
                                        }>
                                        <img
                                            className="color-modal__content-item-img"
                                            src={color.img}
                                            alt={color.value}
                                        />
                                        <span className="color-modal__content-item-name">
                                            {color.value}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </div>
    );
}
