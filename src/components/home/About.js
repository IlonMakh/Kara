import React from "react";
import videoSrc from "../../assets/videos/history.mp4";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="about">
            <h3 className="about__title">History of Kara</h3>
            <video className="about__video" autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
            </video>
            <Link to={'/catalog'} className="about__btn"><span>Discover more</span></Link>
        </section>
    );
}
