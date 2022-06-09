import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useContext,
} from "react";

import { firebaseContext, appContext } from "../../context/context";

import useVoices from "../../hooks/useVoices";

import BackGroundBlock from "../../components/BackGroundBlock";
import Head from "../../components/Head";
import Paragraph from "../../components/Paragraph";
import FooterBlock from "../../components/FooterBlock";
import CardList from "../../components/CardList";
import TranslationForm from "../../components/TranslationForm";
import SectionBlock from "../../components/SectionBlock";
import Button from "../../components/Button";

import footerBackground from "../../assets/footer.jpg";
import firstBackground from "../../assets/background.jpg";
import s from "./Home.module.scss";

const Home = () => {
    const [langArr, setLangsArr] = useContext(appContext);
    const [availableVoices, speak] = useVoices(langArr);

    const [customVoiceRus, setCustomVoicesRus] = useState(null);
    const [customVoiceEng, setCustomVoicesEng] = useState(null);

    const [wordArr, setWordArr] = useState([]);

    const { database, userUid, auth, getUserCardsRef } =
        useContext(firebaseContext);

    const firstUpdate = useRef(true);

    useEffect(() => {
        getUserCardsRef().on("value", (res) => {
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
            getUserCardsRef().set(wordArr);
        }
    }, [wordArr]);

    const handleAddItem = (newWord) => {
        setWordArr([...wordArr, newWord]);
    };

    const handleDeleteItem = (id) => {
        const newWordArr = wordArr.filter((item) => item.id !== id);
        setWordArr(newWordArr);
    };

    const onSpeech = async (id, done) => {
        const word = wordArr.find((word) => word.id === id);
        const speech = done
            ? {
                  lang: word.rus,
                  voice:
                      customVoiceRus ||
                      availableVoices.find((item) => item.lang === "ru").voice,
              }
            : {
                  lang: word.eng,
                  voice:
                      customVoiceEng ||
                      availableVoices.find((item) => item.lang === "en").voice,
              };
        speak(speech.lang, speech.voice);
    };

    const handleSignOut = () => {
        console.log("click");

        auth.signOut();
    };

    return (
        <>
            {/* <BackGroundBlock backgroundImg={firstBackground} fullHeight>
                    <SectionBlock>
                        <Head white>Время учить слова онлайн</Head>
                        <Paragraph white>
                            Используй карточки для запоминания и пополняй
                            словарный запас
                        </Paragraph>
                    </SectionBlock>
                </BackGroundBlock> */}

            {/* <SectionBlock>
                    <Head size="m">
                        Тренируй память и развивай английский
                    </Head>
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
                <Head size="s">Запоминаем английские слова</Head>
                <Paragraph>
                    Чтобы добавить карточку, впишите слово в форму ниже на
                    русском или английском языке в соответствующее поле ввода и
                    нажмите "Добавить слово"
                </Paragraph>
                <TranslationForm handleAddItem={handleAddItem} />
                <CardList
                    wordArr={wordArr}
                    onSpeech={onSpeech}
                    onDeleteItem={handleDeleteItem}
                />
            </SectionBlock>
            <BackGroundBlock backgroundImg={footerBackground}>
                <FooterBlock>
                    <Head opacity uppercase size="s">
                        english language
                    </Head>
                    <Button onClick={handleSignOut}>Выйти</Button>
                </FooterBlock>
            </BackGroundBlock>
        </>
    );
};

export default Home;
