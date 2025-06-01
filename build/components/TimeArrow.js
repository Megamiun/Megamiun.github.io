import React from "react";
export default ({ date }) => React.createElement("div", { className: "date-container" },
    React.createElement("p", null, (date === null || date === void 0 ? void 0 : date.month) ? `${date.month}/${date.year}` : date ? date.year : ''));
