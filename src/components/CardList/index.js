import React, { Component } from "react";
import s from "./CardList.module.scss";
import Card from "./Card";

class CardList extends Component {
    render() {
        const { wordArr, eng, rus } = this.props;
        return (
            <>
                <form
                    className={s.form}
                    onSubmit={(e) => this.props.onSubmit(e)}
                >
                    <input
                        autoComplete="off"
                        placeholder="enter english word"
                        name="eng"
                        type="text"
                        onChange={(e) => this.props.onChange(e)}
                        value={eng}
                    />
                    <input
                        autoComplete="off"
                        placeholder="введите перевод слова"
                        name="rus"
                        type="text"
                        onChange={(e) => this.props.onChange(e)}
                        value={rus}
                    />
                    <button>Add word</button>
                </form>
                <div className={s.card_list}>
                    {wordArr.map(({ eng, rus, id }) => (
                        <Card
                            onSpeech={this.props.onSpeech}
                            onDeleted={this.props.onDeletedItem}
                            id={id}
                            key={id}
                            eng={eng}
                            rus={rus}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default CardList;
