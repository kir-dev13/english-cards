import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { firebaseContext } from "./context/context";

import { Spin } from "antd";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { appContext } from "./context/context";
import "antd/dist/antd.css";
import s from "./App.module.scss";

const App = () => {
    const [langsArr, setLangsArr] = useState(["ru", "en"]);
    const [user, setUser] = useState(null);
    const { auth, setUserUid } = useContext(firebaseContext);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserUid(user.uid);
                setUser({ user });
            } else {
                setUserUid(null);
                setUser({ user: false });
            }
        });
    }, []);

    if (user === null) {
        return (
            <div className={s.spin_wrap}>
                <Spin size="large" />
            </div>
        );
    }
    return (
        <appContext.Provider value={[langsArr, setLangsArr]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<LoginPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </appContext.Provider>
    );
};

export default App;
