import React, { Component } from "react";
import { fire } from "../../services/firebase";
import { firebaseContext } from "../../context/context";

import { Layout, Form, Input, Button } from "antd";

import s from "./LoginPage.module.scss";

const { Content } = Layout;

class LoginPage extends Component {
    state = {
        reg: false,
        appState: "",
    };

    onError = (text) => {
        this.setState({ ...this.state, appState: text });
    };

    toggleLogReg = () => {
        this.setState((prevState) => ({
            reg: !prevState.reg,
            appState: "",
        }));
    };

    onFinishAuth = ({ email, password }) => {
        const { signWithEmail } = this.context;
        signWithEmail(email, password, this.onError);
    };

    onFinishFailedAuth = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    renderFormAuth() {
        return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={this.onFinishAuth}
                onFinishFailed={this.onFinishFailedAuth}
                autoComplete="on"
            >
                <Form.Item
                    label="email"
                    name="email"
                    autoComplete="on"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password autoComplete="off" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
                {this.state.appState ? (
                    <span>{this.state.appState}</span>
                ) : null}
            </Form>
        );
    }

    onFinishReg = ({ email, password, passwordRepeat }) => {
        const { registerWithEmail } = this.context;
        registerWithEmail(email, password, passwordRepeat, this.onError);
    };

    onFinishFailedReg = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    renderFormReg() {
        return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={this.onFinishReg}
                onFinishFailed={this.onFinishFailedReg}
                autoComplete="off"
            >
                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Repeat password"
                    name="passwordRepeat"
                    rules={[
                        {
                            required: true,
                            message: "Please repeat your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                {this.state.appState ? (
                    <span>{this.state.appState}</span>
                ) : null}
            </Form>
        );
    }

    render() {
        return (
            <Layout>
                <Content>
                    <div className={s.root}>
                        <div className={s.form_wrap}>
                            <div className={s.switch}>
                                <Button
                                    className={s.btn_switch}
                                    onClick={this.toggleLogReg}
                                >
                                    {this.state.reg
                                        ? "Вход"
                                        : "Нет аккаунта? Зарегистрироваться"}
                                </Button>
                            </div>
                            {this.state.reg
                                ? this.renderFormReg()
                                : this.renderFormAuth()}
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}

LoginPage.contextType = firebaseContext;

export default LoginPage;
