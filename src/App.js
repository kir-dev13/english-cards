import React, { Component, useState, useContext, useEffect } from "react";

import { fire } from "./services/firebase";
import firebaseContext from "./context/firebaseContext";

import { Spin } from "antd";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

import "antd/dist/antd.css";
import s from "./App.module.scss";


const App = () => {
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
    return <>{user ? <Home user={user} /> : <LoginPage />}</>;
};

export default App;
