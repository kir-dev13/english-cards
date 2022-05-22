import React from "react";
import s from "./Button.module.sass";

const Button = ({ children, onCloack }) => {
    return (
        <>
            <button onClick={onCloack} className={s.btn}>
                {children}
            </button>
        </>
    );
};

export default Button;
