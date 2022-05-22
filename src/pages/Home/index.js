import React, { Component } from "react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

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

    const firstUpdate = useRef(true);

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

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            database.ref(urlRequest).set(wordArr);
        }
    }, [wordArr]);

    const resetForm = () => {
        setRus("");
        setEng("");
    };

    const handleInputChange = (e) => {
        if (e.target.getAttribute("name") === "rus") {
            setRus(e.target.value);
        }
        if (e.target.getAttribute("name") === "eng") {
            setEng(e.target.value);
        }
    };

    const checkField = async (field) => {
        const translate = field === eng ? rus : eng;
        const interpretator = translate === rus ? "ru-en" : "en-ru";
        if (!field) {
            let result = await getTranslateWord(translate, interpretator).then(
                (res) => {
                    if (res.status) {
                        console.log("что-то пошло не так");
                    } else {
                        console.log(res);
                        return res.translate;
                    }
                }
            );
            return result;
        }
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const getWord = {};
        if (!eng && !rus) {
            console.log("заполните хотя бы одно поле");
        } else {
            await checkField(eng).then((res) => (getWord.eng = res));
            await checkField(rus).then((res) => (getWord.rus = res));
            console.log(getWord);
            const newWord = await {
                eng: eng || getWord.eng,
                rus: rus || getWord.rus,
                id: +new Date(),
            };
            setWordArr([...wordArr, newWord]);
            resetForm();
        }
    };

    const handleDeletedItem = (id) => {
        const newWordArr = wordArr.filter((item) => item.id !== id);
        setWordArr(newWordArr);
    };

    const onSpeech = (id) => {
        const word = wordArr.find((word) => word.id === id);
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
