import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/actions/modalActions";
import { connect } from "react-redux";

function Header({ classes, basket }) {
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [activeCategory, setActiveCategory] = useState("");
    const headerRef = useRef(null);
    const burgerRef = useRef(null);
    let headerClassName = "header";

    const toggleMenu = (activeLink) => {
        if (window.innerWidth <= 1024) {
            headerRef.current.classList.toggle("open");
            document.body.classList.toggle("hidden");
        }

        setActiveCategory(activeLink);
    };

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

        const burgerBtn = burgerRef.current;

        window.addEventListener("scroll", handleScroll);
        burgerBtn.addEventListener("click", toggleMenu);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            burgerBtn.removeEventListener("click", toggleMenu);
        };
    }, []);

    headerClassName = isHeaderSticky
        ? headerClassName + " header_sticky"
        : headerClassName;
    headerClassName =
        window.innerWidth <= 1024
            ? headerClassName + " mobile"
            : headerClassName;
    const menuLinks = [
        { to: "/categories", text: "Bags" },
        { to: "/categories", text: "Women" },
        { to: "/categories", text: "Men" },
        { to: "/categories", text: "Children" },
        { to: "/categories", text: "Watches & Jewerly" },
    ];
    const isActive = (category) =>
        activeCategory === category
            ? "header__menu-link active"
            : "header__menu-link";

    const dispatch = useDispatch();

    const handleOpenModal = (modalName) => {
        dispatch(openModal(modalName));
    };

    const commonAmount = basket.basket.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        0
    );

    return (
        <header className={headerClassName + classes} ref={headerRef}>
            <div className="container">
                <div className="header__menu">
                    <nav className="header__menu-nav">
                        <ul className="header__menu-list">
                            {menuLinks.map((link) => (
                                <li key={link.to} className="header__menu-item">
                                    <Link
                                        className={isActive(link.text)}
                                        to={link.to}
                                        onClick={() => toggleMenu(link.text)}>
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
                        <Link className="header__menu-aside-link" to={"/account"}>
                            <svg className="header__menu-aside-ico">
                                <use href="#account" />
                            </svg>
                        </Link>
                        <button
                            className="header__menu-aside-link"
                            onClick={() => handleOpenModal("basket")}>
                            <svg className="header__menu-aside-ico">
                                <use href="#basket" />
                            </svg>
                            <span className="basket-amount">{commonAmount}</span>
                        </button>
                    </div>
                    <div className="header__menu-btn" ref={burgerRef}>
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="cross">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <Link to={"/"} className="header__logo">
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

const mapStateToProps = (state) => ({
    wrapper: state.wrapper,
    basket: state.basket,
});

export default connect(mapStateToProps)(Header);
