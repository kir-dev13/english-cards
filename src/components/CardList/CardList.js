import React from "react";
import Card from "../Card/Card";
import s from "./CardList.module.scss";

const CardList = ({ wordArr, onSpeech, onDeleteItem }) => {
    return (
        <>
            <div className={s.root}>
                {wordArr.map(({ eng, rus, id }) => (
                    <Card
                        onSpeech={onSpeech}
                        onDelete={onDeleteItem}
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
