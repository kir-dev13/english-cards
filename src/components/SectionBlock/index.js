import React from "react";
import cl from "classnames";
import s from "./SectionBlock.module.scss";

const Section = ({
    children,
    backgroundColor = "transparent",
    row = false,
}) => {
    const styleCover = { backgroundColor };
    return (
        <section className={cl(s.cover)} style={styleCover}>
            <div className={cl(s.warp, { [s.row]: row })}>{children}</div>
        </section>
    );
};

export default Section;
