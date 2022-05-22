import React from "react";
import cl from "classnames";
import s from "./Paragraph.module.scss";

const Paragraph = ({ children, white }) => {
    return (
        <p className={cl(s.paragraph, { [s.whiteColor]: white })}>{children}</p>
    );
};
export default Paragraph;
