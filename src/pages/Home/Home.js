import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useContext,
} from "react";

import firebaseContext from "../../context/firebaseContext";

import { useSpeechSynthesis } from "react-speech-kit";

import BackGroundBlock from "../../components/BackGroundBlock";
import Header from "../../components/Header";
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
    const [wordArr, setWordArr] = useState([]);

    const { database, userUid, auth, getUserCardsRef } =
        useContext(firebaseContext);

    const firstUpdate = useRef(true);

    const { speak, voices } = useSpeechSynthesis();

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

    const onSpeech = (id, done) => {
        const word = wordArr.find((word) => word.id === id);
        const speech = done
            ? { lang: word.rus, voice: voices[0] }
            : { lang: word.eng, voice: voices[11] };
        speak({ text: speech.lang, voice: speech.voice });
    };

    const handleSignOut = () => {
        console.log("click");

        auth.signOut();
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
                <Header size="s">Запоминаем английские слова</Header>
                <Paragraph>
                    Чтобы добавить карточку, впишите слово в форму ниже на
                    русском или английском языке в соответствующее поле ввода и
                    нажмите "Добавить слово"
                </Paragraph>
                <TranslationForm
                    handleAddItem={handleAddItem}
                />
                <CardList
                    wordArr={wordArr}
                    onSpeech={onSpeech}
                    onDeleteItem={handleDeleteItem}
                />
            </SectionBlock>
            <BackGroundBlock backgroundImg={footerBackground}>
                <FooterBlock>
                    <Header opacity uppercase size="s">
                        english language
                    </Header>
                    <Button onClick={handleSignOut}>Выйти</Button>
                </FooterBlock>
            </BackGroundBlock>
        </>
    );
};

export default Home;
