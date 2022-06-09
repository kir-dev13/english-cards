import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header = ({ children }) => (
    <header className={s.root}>
        <nav className={s.menu}>
            <NavLink className={s.link} to="/">
                Главная
            </NavLink>
            <NavLink className={s.link} to="login">
                Вход
            </NavLink>
        </nav>
    </header>
);

export default Header;
