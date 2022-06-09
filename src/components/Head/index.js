import React from "react";
import cl from "classnames";
import s from "./Head.module.scss";

const Head = ({ children, white, opacity, uppercase, size = "xl" }) => {
    let sizePoint;
    switch (size) {
        case "xl":
            sizePoint = 1;
            break;
        case "l":
            sizePoint = 2;
            break;
        case "m":
            sizePoint = 3;
            break;
        case "s":
            sizePoint = 4;
            break;
        case "xs":
            sizePoint = 5;
            break;
        default:
            sizePoint = 1;
    }

    return React.createElement(
        `h${sizePoint}`,
        {
            className: cl(s.root, s[`size${size.toUpperCase()}`], {
                [s.whiteColor]: white,
                [s.opacity]: opacity,
                [s.uppercase]: uppercase,
            }),
        },
        children
    );
};
export default Head;
