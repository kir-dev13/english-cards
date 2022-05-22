import React from "react";
import s from "./Card.module.scss";
import cl from "classnames";
import {
    CheckSquareOutlined,
    DeleteOutlined,
    SoundOutlined,
} from "@ant-design/icons";

class Card extends React.Component {
    state = {
        done: false,
        isRemembered: false,
    };

    handleCardClick = () => {
        this.setState(({ done, isRemembered }) => {
            if (isRemembered) {
                return { done: false };
            } else {
                return {
                    done: !done,
                };
            }
        });
    };

    handleIsRememberClick = () => {
        this.setState(({ isRemembered, done }) => {
            if (!isRemembered) {
                return {
                    done: false,
                    isRemembered: !isRemembered,
                };
            } else {
                return {
                    isRemembered: !isRemembered,
                };
            }
        });
    };

    handleDeletedClick = () => {
        const { id } = this.props;
        this.props.onDeleted(id);
    };

    handleSpeech = () => {
        const { id } = this.props;
        this.props.onSpeech(id);
    };

    render() {
        const { eng, rus } = this.props;
        const { done } = this.state;
        const { isRemembered } = this.state;

        return (
            <div className={s.root}>
                <div
                    className={cl(s.card, {
                        [s.done]: done,
                        [s.isRemembered]: isRemembered,
                    })}
                    onClick={this.handleCardClick}
                >
                    <div className={s.cardInner}>
                        <div className={s.cardFront}>{eng}</div>
                        <div className={s.cardBack}>{rus}</div>
                    </div>
                </div>
                <div className={s.icon}>
                    <CheckSquareOutlined onClick={this.handleIsRememberClick} />
                </div>
                <div className={s.icon}>
                    <DeleteOutlined onClick={this.handleDeletedClick} />
                </div>
                <div className={s.icon}>
                    <SoundOutlined onClick={this.handleSpeech} />
                </div>
            </div>
        );
    }
}

export default Card;
