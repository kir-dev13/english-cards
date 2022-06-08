import React from "react";
import Card from "../Card/Card";
import s from "./CardList.module.scss";

const CardList = ({
    wordArr,
    eng,
    rus,
    onChange,
    onSpeech,
    onDeletedItem,
    onSubmit,
}) => {
    return (
        <>
            <form className={s.form} onSubmit={(e) => onSubmit(e)}>
                <input
                    autoComplete="off"
                    placeholder="enter english word"
                    name="eng"
                    type="text"
                    onChange={(e) => onChange(e)}
                    value={eng}
                />
                <input
                    autoComplete="off"
                    placeholder="впишите слово на русском"
                    name="rus"
                    type="text"
                    onChange={(e) => onChange(e)}
                    value={rus}
                />
                <button>Добавить слово</button>
            </form>
            <div className={s.root}>
                {wordArr.map(({ eng, rus, id }) => (
                    <Card
                        onSpeech={onSpeech}
                        onDeleted={onDeletedItem}
                        id={id}
                        key={id}
                        eng={eng}
                        rus={rus}
                    />
                ))}
            </div>
        </>
    );
};

export default CardList;
