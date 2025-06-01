import React from "react";
import { includeSVG } from "../helpers/icons";
import { Link } from "../components/Link";
const Item = ({ info }) => React.createElement("div", { className: "block-wrapper", key: info.name },
    React.createElement("p", { className: "item-icon" }, info.icon && includeSVG(info.icon)),
    React.createElement("p", { className: "item-title" },
        info.name,
        ": "),
    React.createElement("p", null,
        React.createElement(Link, Object.assign({}, info))));
export default ({ data }) => data.map(info => React.createElement(Item, { key: info.name, info: info }));
