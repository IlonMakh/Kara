import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/1.jfif";
import img2 from "../../assets/images/2.jfif";

export default function Promo() {
    const [currentSlide, setCurrentSlide] = useState("01");
    const [totalSlides, setTotalSlides] = useState("02");
    const splideRef = useRef(null);
    const slides = [
        {
            title: "Kara 1 collection",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            link: "/catalog",
            img: img1,
        },
        {
            title: "Kara 2 collection",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            link: "/catalog",
            img: img2,
        },
    ];

    useEffect(() => {
        const splideInstance = splideRef.current.splide;
        const updateSlideInfo = () => {
            setCurrentSlide(`0${splideInstance.index + 1}`);
            setTotalSlides(`0${splideInstance.length}`);
        };

        splideInstance.on("move", updateSlideInfo);

        return () => {
            splideInstance.off("move", updateSlideInfo);
        };
    }, [totalSlides, currentSlide]);

    return (
        <section className="promo">
            <Splide
                ref={splideRef}
                hasTrack={false}
                options={{
                    type: "loop",
                    autoplay: true,
                    arrows: false,
                    pagination: false,
                    pauseOnHover: false,
                }}>
                <SplideTrack>
                    {slides.map((slide) => (
                        <SplideSlide key={slide.title}>
                            <img
                                className="splide__slide-img"
                                src={slide.img}
                                alt="collection"
                            />
                            <div className="container">
                                <div className="splide__slide-info">
                                    <h3 className="splide__slide-title">
                                        {slide.title}
                                    </h3>
                                    <p className="splide__slide-text">
                                        {slide.text}
                                    </p>
                                    <Link
                                        to={slide.link}
                                        className="splide__slide-btn">
                                        <span>Shop now</span>
                                    </Link>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </SplideTrack>

                <div className="progress__wrapper">
                    <div className="splide__progress">
                        <div className="splide__progress__bar" />
                    </div>
                    <span className="splide__progress-num splide__progress-num_current">
                        {currentSlide}
                    </span>
                    <span className="splide__progress-num splide__progress-num_total">
                        {totalSlides}
                    </span>
                </div>
            </Splide>
        </section>
    );
}
