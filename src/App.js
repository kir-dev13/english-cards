import React, { Component } from "react";

import { fire } from "./services/firebase";
import firebaseContext from "./context/firebaseContext";

import { Spin } from "antd";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

import "antd/dist/antd.css";
import s from "./App.module.scss";

class App extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        console.log(this.context);

        const { auth, setUserUid } = this.context;

        auth.onAuthStateChanged((user) => {
            // user ? this.setState({ user }) : this.setState({ user: false });
            if (user) {
                setUserUid(user.uid);
                this.setState({ user });
            } else {
                setUserUid(null);
                this.setState({ user: false });
            }
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

App.contextType = firebaseContext;

export default App;
