import React from "react";

export default function Marquee({children}) {
    return (
        <div className="marquee">
            <div className="marquee__line">
                <span className="marquee__line-text">{children}</span>
                <span className="marquee__line-text">{children}</span>
            </div>
            <div className="marquee__line">
                <span className="marquee__line-text">{children}</span>
                <span className="marquee__line-text">{children}</span>
            </div>
        </div>
    );
}
