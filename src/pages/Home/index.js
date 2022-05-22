import React, { Component } from "react";

import database from "../../services/firebase";

import {
    ClockCircleOutlined,
    HomeOutlined,
    SmileOutlined,
} from "@ant-design/icons";

import BackGroundBlock from "../../components/BackGroundBlock";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import FooterBlock from "../../components/FooterBlock";
import CardList from "../../components/CardList";
import wordsList from "../../components/WordsList";
import getTranslateWord from "../../services/dictionary";

import SectionBlock from "../../components/SectionBlock";
import Button from "../../components/Button";

import footerBackground from "../../assets/footer.jpg";
import firstBackground from "../../assets/background.jpg";
import s from "./Home.module.scss";

export default class Home extends Component {
    state = {
        wordArr: [],
        rus: "",
        eng: "",
    };

    urlRequest = `/cards/${this.props.user.uid}`;

    componentDidMount() {
        database.ref(this.urlRequest).on("value", (res) => {
            this.setState({
                wordArr: res.val() || [],
            });
        });
        // .then();
    }

    resetForm = () => {
        this.setState({
            wordArr: this.state.wordArr,
            rus: "",
            eng: "",
        });
    };

    setNewWord = (newWord = null) => {
        console.log("setNewWord", newWord);
        if (newWord) {
            database.ref(this.urlRequest).set([...this.state.wordArr, newWord]);
        } else {
            database.ref(this.urlRequest).set([...this.state.wordArr]);
        }
    };

    handleInputChange = (e) => {
        if (e.target.getAttribute("name") === "rus") {
            this.setState({
                rus: e.target.value,
            });
        }
        if (e.target.getAttribute("name") === "eng") {
            this.setState({
                eng: e.target.value,
            });
        }
    };

    handleSubmitForm = async (e) => {
        console.log("click");

        e.preventDefault();
        if (!this.state.eng) {
            console.log("введит английское слово");
        } else {
            if (!this.state.rus) {
                const getWord = await getTranslateWord(this.state.eng);
                console.log("getWord: ", getWord);
                if (getWord.status !== 400) {
                    await this.setState({
                        rus: getWord.translate,
                    });
                } else {
                    console.log("не смог получить перевод");
                }
            }
            const newWord = {
                eng: this.state.eng,
                rus: this.state.rus,
                id: +new Date(),
            };
            console.log("newWord: ", newWord);

            await this.setNewWord(newWord);
            this.resetForm();
        }
    };

    handleDeletedItem = async (id) => {
        await this.setState(({ wordArr }) => {
            // const idx = wordArr.findIndex((item) => item.id === id);
            const newWordArr = wordArr.filter((item) => item.id !== id);
            return {
                wordArr: newWordArr,
            };
        });
        this.setNewWord();
    };

    click() {
        console.log("click");
    }

    render() {
        const { wordArr } = this.state;
        console.log(this.props.user.uid);

        return (
            <>
                {/* <BackGroundBlock backgroundImg={firstBackground} fullHeight>
                    <SectionBlock>
                        <Header white>Время учить слова онлайн</Header>
                        <Paragraph white>
                            Используй карточки для запоминания и пополняй
                            словарный запас
                        </Paragraph>
                    </SectionBlock>
                </BackGroundBlock> */}

                {/* <SectionBlock>
                    <Header size="m">
                        Тренируй память и развивай английский
                    </Header>
                    <SectionBlock row>
                        <Paragraph>
                            <ClockCircleOutlined className={s.icon} />В любое
                            время
                        </Paragraph>
                        <Paragraph>
                            <HomeOutlined className={s.icon} />
                            Из любого места
                        </Paragraph>
                        <Paragraph>
                            <SmileOutlined className={s.icon} />
                            Регулярно
                        </Paragraph>
                    </SectionBlock>
                </SectionBlock> */}
                <SectionBlock backgroundColor="lightgrey">
                    <Header size="s">Список слов</Header>
                    <Paragraph>
                        Нажимай на карточки и узнавай перевод новых слов
                    </Paragraph>
                    <CardList
                        wordArr={wordArr}
                        onDeletedItem={this.handleDeletedItem}
                        onSubmit={this.handleSubmitForm}
                        onChange={this.handleInputChange}
                        eng={this.state.eng}
                        rus={this.state.rus}
                    />
                </SectionBlock>
                <BackGroundBlock backgroundImg={footerBackground}>
                    <FooterBlock>
                        <Header opacity uppercase size="s">
                            english language
                        </Header>
                        <Button onCloack={this.click}>Начать уроки</Button>
                    </FooterBlock>
                </BackGroundBlock>
            </>
        );
    }
}
