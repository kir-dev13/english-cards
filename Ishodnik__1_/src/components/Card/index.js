import React from 'react'
import cl from 'classnames';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';

import s from './Card.module.scss';

class Card extends React.Component {
    state = {
        done: false
    }

    handleCardClick = () => {
        this.setState({
            done: true,
        });
    }

    render() {
        const {eng, rus} = this.props
        const { done } = this.state
        
        return (
            <div className={s.root}>
                <div
                    className={ cl(s.card, { 
                        [s.done]: done,
                    }) }
                    onClick={ this.handleCardClick}
                >
                    <div className={s.cardInner}>
                        <div className={s.cardFront}>
                            {eng}
                        </div>
                        <div className={s.cardBack}>
                            {rus}
                        </div>
                    </div>
                </div>
                <div className={s.icons}>
                    <CheckSquareOutlined />
                </div>
                <div className={cl(s.icons, s.deleted)}>
                    <DeleteOutlined />
                </div>
            </div>
        )
    }

}


export default Card;
