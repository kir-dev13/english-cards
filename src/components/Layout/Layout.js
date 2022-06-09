import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Header from "../Header";
import s from "./Layout.module.scss";

const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
};

export default Layout;
