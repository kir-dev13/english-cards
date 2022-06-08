import React, { Component } from "react";
import Card from "./Card";
import s from "./CardList.module.scss";

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
                        placeholder="впишите слово на русском"
                        name="rus"
                        type="text"
                        onChange={(e) => this.props.onChange(e)}
                        value={rus}
                    />
                    <button>Добавить слово</button>
                </form>
                <div className={s.root}>
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
