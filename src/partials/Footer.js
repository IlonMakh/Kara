import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Link to={"/"} className="footer__item footer__logo">KARA</Link>
                <div className="footer__item">
                    <div className="footer__item-title">For customers</div>
                    <ul className="footer__item-list">
                        <li className="footer__item-li">
                            <Link className="footer__item-link" to={"/"}>
                                Services
                            </Link>
                        </li>
                        <li className="footer__item-li">
                            <Link className="footer__item-link" to={"/"}>
                                Return goods
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__item">
                    <div className="footer__item-title">Follow us</div>
                    <ul className="footer__item-list">
                        <li className="footer__item-sm-list">
                            <a className="footer__sm-link" href="https://us.dolcegabbana.com/en/" rel="noreferrer" target="_blank">
                                <svg className="footer__sm-link-ico">
                                    <use href="#instagram" />
                                </svg>
                            </a>
                            <a className="footer__sm-link" href="https://us.dolcegabbana.com/en/" rel="noreferrer" target="_blank">
                                <svg className="footer__sm-link-ico">
                                    <use href="#telegram" />
                                </svg>
                            </a>
                            <a className="footer__sm-link" href="https://us.dolcegabbana.com/en/" rel="noreferrer" target="_blank">
                                <svg className="footer__sm-link-ico">
                                    <use href="#watsapp" />
                                </svg>
                            </a>
                            <a className="footer__sm-link" href="https://us.dolcegabbana.com/en/" rel="noreferrer" target="_blank">
                                <svg className="footer__sm-link-ico">
                                    <use href="#mail" />
                                </svg>
                            </a>
                        </li>
                        <li className="footer__item-li">
                            <form className="footer__mail-form">
                              <input className="footer__mail-input" placeholder="Sign up for the news"/>
                              <button className="footer__mail-send">
                                <svg className="footer__mail-send-ico">
                                    <use href="#send" />
                                </svg>
                              </button>
                            </form>
                        </li>
                    </ul>
                </div>
                <div className="footer__item">
                    <div className="footer__item-title">Language</div>
                    <select className="footer__item-select">
                      <option value="english">English</option>
                      <option value="russian">Russian</option>
                      <option value="romanian">Romanian</option>
                    </select>
                </div>
            </div>
        </footer>
    );
}
