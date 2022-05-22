import React, { Component } from "react";

import { fire } from "./services/firebase";

import { Spin } from "antd";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

import "antd/dist/antd.css";
import s from "./App.module.scss";

export default class App extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        fire.auth().onAuthStateChanged((user) => {
            console.log("user ", user);
            user ? this.setState({ user }) : this.setState({ user: false });
        });
    }

    render() {
        const { user } = this.state;

        if (user === null) {
            return (
                <div className={s.spin_wrap}>
                    <Spin size="large" />
                </div>
            );
        }
        return <>{user ? <Home user={user} /> : <LoginPage />}</>;
    }
}
