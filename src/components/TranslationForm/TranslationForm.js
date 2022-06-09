import React, { useState } from "react";
import requestTranslate from "../../services/dictionary";

import s from "./TranslationForm.module.scss";

const TranslationForm = ({ handleAddItem }) => {
    const [rus, setRus] = useState("");
    const [eng, setEng] = useState("");
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState(null);

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

    const getTranslateWord = async (field) => {
        setLoading(true);
        const translate = field === eng ? rus : eng;
        const interpretator = translate === rus ? "ru-en" : "en-ru";
        if (!field) {
            try {
                const result = await requestTranslate(translate, interpretator);
                if (result.status) {
                    console.log("что-то пошло не так");
                    setFormState(
                        "что-то пошло не так, возможно сервер не отвечает на запрос"
                    );
                } else {
                    console.log(result);
                    return result.translate;
                }
            } catch (err) {
                throw new Error(`Something failed: `, err);
            } finally {
                console.log("finally!");
                //?? setLoading(false);
                console.log("finally 2");
            }
        }
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const getWord = {};
        if (!eng && !rus) {
            console.log("заполните хотя бы одно поле");
            setFormState("заполните хотя бы одно поле");
        } else {
            await getTranslateWord(eng).then((res) => (getWord.eng = res));
            await getTranslateWord(rus).then((res) => (getWord.rus = res));
            console.log(getWord);
            if ((rus || getWord.rus) && (eng || getWord.eng)) {
                const newWord = {
                    eng: eng || getWord.eng,
                    rus: rus || getWord.rus,
                    id: +new Date(),
                    isRemembered: false,
                };
                handleAddItem(newWord);
                resetForm();
                console.log(newWord);
                setFormState("карточка успешно добавлена добавлена!");
                setTimeout(() => {
                    setFormState(null);
                }, 2000);
            } else {
                console.log("не случилось =(");
                setFormState("не смог получить перевод");
            }
            setLoading(false);
        }
    };

    return (
        <form className={s.root} onSubmit={handleSubmitForm}>
            <input
                autoComplete="off"
                placeholder="enter english word"
                name="eng"
                type="text"
                onChange={handleInputChange}
                value={eng}
            />
            <input
                autoComplete="off"
                placeholder="впишите слово на русском"
                name="rus"
                type="text"
                onChange={handleInputChange}
                value={rus}
            />
            <button disabled={loading}>
                {loading ? "Запрашиваю перевод..." : "Добавить слово"}
            </button>
            <span>{formState}</span>
        </form>
    );
};

export default TranslationForm;
