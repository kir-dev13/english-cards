import React, { Component } from "react";
import { fire } from "../../services/firebase";

import { Layout, Form, Input, Button } from "antd";

import s from "./LoginPage.module.scss";

const { Content } = Layout;

export default class LoginPage extends Component {
    state = {
        reg: false,
    };

    toggleLogReg = () => {
        this.setState((prevState) => ({
            reg: !prevState.reg,
        }));
    };

    onFinishAuth = ({ email, password }) => {
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => console.log(res));
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
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    onFinishReg = ({ email, password, passwordRepeat }) => {
        if (password === passwordRepeat) {
            fire.auth()
                .createUserWithEmailAndPassword(email, password)
                .then((res) => console.log(res));
        } else {
            console.log("пароли не совпадают");
        }
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
