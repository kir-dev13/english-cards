import React, { useState } from "react";
import s from "./Card.module.scss";
import cl from "classnames";
import {
    CheckSquareOutlined,
    DeleteOutlined,
    SoundOutlined,
} from "@ant-design/icons";

const Card = ({ id, eng, rus, onDeleted, onSpeech }) => {
    const [stateCard, setStateCard] = useState({
        done: false,
        isRemembered: false,
    });

    const handleCardClick = () => {
        setStateCard((prevState) => {
            if (prevState.isRemembered) {
                return { ...prevState, done: false };
            } else {
                return {
                    ...prevState,
                    done: !prevState.done,
                };
            }
        });
    };

    const handleIsRememberClick = () => {
        setStateCard((prevState) => {
            if (!prevState.isRemembered) {
                return {
                    done: false,
                    isRemembered: !prevState.isRemembered,
                };
            } else {
                return {
                    ...prevState,
                    isRemembered: !prevState.isRemembered,
                };
            }
        });
    };

    const handleDeletedClick = () => {
        onDeleted(id);
    };

    const handleSpeech = () => {
        onSpeech(id, stateCard.done);
    };

    return (
        <div className={s.root}>
            <div
                className={cl(s.card, {
                    [s.done]: stateCard.done,
                    [s.isRemembered]: stateCard.isRemembered,
                })}
                onClick={handleCardClick}
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>{eng}</div>
                    <div className={s.cardBack}>{rus}</div>
                </div>
            </div>
            <div className={s.iconsContainer}>
                <CheckSquareOutlined
                    className={s.icon}
                    onClick={handleIsRememberClick}
                />

                <DeleteOutlined
                    className={s.icon}
                    onClick={handleDeletedClick}
                />

                <SoundOutlined className={s.icon} onClick={handleSpeech} />
            </div>
        </div>
    );
};

export default Card;
