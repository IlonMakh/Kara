import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const headerRef = useRef(null);
    const burgerRef = useRef(null);
    let headerClassName = 'header';

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current.clientHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= headerHeight) {
                setIsHeaderSticky(true);
            } else {
                setIsHeaderSticky(false);
            }
        };

        const toggleMenu = () => {
            headerRef.current.classList.toggle('open');
            document.body.classList.toggle('hidden');
        }
        const burgerBtn = burgerRef.current;

        window.addEventListener("scroll", handleScroll);
        burgerBtn.addEventListener('click', toggleMenu);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            burgerBtn.removeEventListener('click', toggleMenu);
        };
    }, []);

    headerClassName = isHeaderSticky ? headerClassName + " header_sticky" : headerClassName;
    headerClassName = window.innerWidth <= 1024 ? headerClassName + " mobile" : headerClassName;
    const menuLinks = [
        { to: "/catalog", text: "Bags" },
        { to: "/catalog", text: "Women" },
        { to: "/catalog", text: "Men" },
        { to: "/catalog", text: "Children" },
        { to: "/catalog", text: "Watches & Jewerly" },
    ];

    return (
        <header className={headerClassName} ref={headerRef}>
            <div className="container">
                <div className="header__menu">
                    <nav className="header__menu-nav">
                        <ul className="header__menu-list">
                            {menuLinks.map((link) => (
                                <li key={link.to} className="header__menu-item">
                                    <Link
                                        className="header__menu-link"
                                        to={link.to}>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header__menu-aside">
                        <Link
                            className="header__menu-aside-link"
                            to={"/account"}>
                            <svg className="header__menu-aside-ico">
                                <use href="#search" />
                            </svg>
                        </Link>
                        <Link
                            className="header__menu-aside-link"
                            to={"/login"}>
                            <svg className="header__menu-aside-ico">
                                <use href="#account" />
                            </svg>
                        </Link>
                        <Link
                            className="header__menu-aside-link"
                            to={"/basket"}>
                            <svg className="header__menu-aside-ico">
                                <use href="#basket" />
                            </svg>
                            <span className="basket-amount">8</span>
                        </Link>
                    </div>
                    <div class="header__menu-btn" ref={burgerRef}>
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="cross">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <Link to={'/'} className="header__logo">
                    <h1 className="header__logo-name">KARA</h1>
                    <img
                        className="header__logo-img"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
                        alt="logo"
                    />
                </Link>
                {/* <div className="header__categories">
                    <ul className="header__categories-list">
                        {categoriesLinks.map((link) => (
                            <li
                                key={link.to}
                                className="header__categories-item">
                                <Link
                                    className="header__categories-link"
                                    to={link.to}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>
        </header>
    );
}
