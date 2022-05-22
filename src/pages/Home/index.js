import React, { Component } from "react";
import { useState, useEffect } from "react";

import database from "../../services/firebase";

import { useSpeechSynthesis } from "react-speech-kit";

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

const Home = (props) => {
    const [wordArr, setWordArr] = useState([]);
    const [rus, setRus] = useState("");
    const [eng, setEng] = useState("");

    const urlRequest = `/cards/${props.user.uid}`;

    const { speak, voices } = useSpeechSynthesis();

    useEffect(() => {
        database.ref(urlRequest).on("value", (res) => {
            if (Array.isArray(res.val())) {
                setWordArr(res.val());
            } else if (res.val()) {
                setWordArr(Array.from(res.val()));
            }
        });
    }, []);

    const resetForm = () => {
        setRus("");
        setEng("");
    };

    const setNewWord = (newWord) => {
        console.log("setNewWord", newWord);
        if (!Array.isArray(newWord)) {
            database.ref(urlRequest).set([...wordArr, newWord]);
        } else {
            database.ref(urlRequest).set([...newWord]);
        }
    };

    const handleInputChange = (e) => {
        if (e.target.getAttribute("name") === "rus") {
            setRus(e.target.value);
        }
        if (e.target.getAttribute("name") === "eng") {
            setEng(e.target.value);
        }
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        let getWord;
        if (!eng) {
            console.log("введит английское слово");
        } else {
            if (!rus) {
                getWord = await getTranslateWord(eng);
                console.log("получили слово: ", getWord);
                if (getWord.status !== 400) {
                    console.log("статус");

                    // await setRus(getWord.translate);
                } else {
                    console.log("не смог получить перевод");
                    return;
                }
            }
            console.log(rus);

            const newWord = await {
                eng: eng,
                rus: rus || getWord.translate,
                id: +new Date(),
            };
            console.log("newWord: ", newWord);
            console.log("rus ", rus);

            await setNewWord(newWord);
            resetForm();
        }
    };

    const handleDeletedItem = async (id) => {
        const newWordArr = wordArr.filter((item) => item.id !== id);
        await setWordArr(newWordArr);
        await console.log(wordArr);

        await setNewWord(newWordArr);
    };

    const onSpeech = (id) => {
        const word = wordArr.find((word) => word.id === id);
        console.log(word.eng);

        speak({ text: word.eng, voice: voices[11] });
    };

    const click = () => {
        console.log("click");
    };

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
                    onSpeech={onSpeech}
                    onDeletedItem={handleDeletedItem}
                    onSubmit={handleSubmitForm}
                    onChange={handleInputChange}
                    eng={eng}
                    rus={rus}
                />
            </SectionBlock>
            <BackGroundBlock backgroundImg={footerBackground}>
                <FooterBlock>
                    <Header opacity uppercase size="s">
                        english language
                    </Header>
                    <Button onClick={click}>Начать уроки</Button>
                </FooterBlock>
            </BackGroundBlock>
        </>
    );
};

export default Home;

class HomeOld extends Component {
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
            wordArr: this.wordArr,
            rus: "",
            eng: "",
        });
    };

    setNewWord = (newWord = null) => {
        console.log("setNewWord", newWord);
        if (newWord) {
            database.ref(this.urlRequest).set([...this.wordArr, newWord]);
        } else {
            database.ref(this.urlRequest).set([...this.wordArr]);
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
        if (!this.eng) {
            console.log("введит английское слово");
        } else {
            if (!this.rus) {
                const getWord = await getTranslateWord(this.eng);
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
                eng: this.eng,
                rus: this.rus,
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

    onSpeech = (id) => {
        const word = this.wordArr.find((word) => word.id === id);
        console.log(word);
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
                        onSpeech={this.onSpeech}
                        onDeletedItem={this.handleDeletedItem}
                        onSubmit={this.handleSubmitForm}
                        onChange={this.handleInputChange}
                        eng={this.eng}
                        rus={this.rus}
                    />
                </SectionBlock>
                <BackGroundBlock backgroundImg={footerBackground}>
                    <FooterBlock>
                        <Header opacity uppercase size="s">
                            english language
                        </Header>
                        <Button onClick={this.click}>Начать уроки</Button>
                    </FooterBlock>
                </BackGroundBlock>
            </>
        );
    }
}
