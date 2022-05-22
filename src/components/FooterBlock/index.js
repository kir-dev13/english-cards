import React from "react";
import s from "./FooterBlock.module.sass";

const FooterBlock = ({ children }) => {
    return (
        <div className={s.cover}>
            <div className={s.warp}>{children}</div>
        </div>
    );
};

export default FooterBlock;
