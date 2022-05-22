import React from "react";
import s from "./BackGroundBlock.module.scss";

const BackGroundBlock = ({ children, backgroundImg, fullHeight = false }) => {
    const styleCover = { backgroundImage: `url(${backgroundImg})` };
    if (fullHeight) {
        styleCover.height = "100vh";
    }

    return (
        <div className={s.cover} style={styleCover}>
            {children}
        </div>
    );
};

export default BackGroundBlock;
