import React from "react";
import s from "./Button.module.sass";

const Button = ({ children, onClick }) => {
    return (
        <>
            <button onClick={onClick} className={s.btn}>
                {children}
            </button>
        </>
    );
};

export default Button;
