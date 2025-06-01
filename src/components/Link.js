import { includeSVG } from "../helpers/icons";
import React from "react";
export const Link = ({ value, url }) => {
    if (!url)
        return React.createElement(React.Fragment, null, value);
    return React.createElement("a", { href: url },
        value,
        " ",
        includeSVG('linkExternal'));
};
