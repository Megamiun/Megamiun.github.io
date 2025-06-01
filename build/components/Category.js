import * as React from "react";
export default ({ id, title, breakable, children }) => React.createElement("section", { id: id, className: `category ${breakable ? "breakable" : ""}` },
    title && React.createElement("p", { className: "category-title" }, title),
    children);
