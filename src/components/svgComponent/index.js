import React from "react";

const SvgComponent = (svgProps) => (
    <svg {...svgProps}>
        <defs>
            <linearGradient id={"gradient1"}>
                <stop offset={"20%"} stopColor={"cornflowerblue"}/>
                <stop offset={"80%"} stopColor={"deepskyblue"}/>
            </linearGradient>
        </defs>
        {
            React.cloneElement(svgProps.children[0], {
                fill: "url(#gradient1)"
            })
        }
    </svg>
);

export default SvgComponent;