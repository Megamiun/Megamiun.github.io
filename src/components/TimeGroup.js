import React from "react";
import TimeArrow from "./TimeArrow";
const TimeRow = ({ name, date }) => React.createElement("div", { className: "timebox" },
    React.createElement("div", { className: "timeline" },
        React.createElement(TimeArrow, { date: date })),
    React.createElement("div", { className: "info" },
        React.createElement("p", null, name)));
export default ({ title, items }) => React.createElement(React.Fragment, null,
    React.createElement("div", { className: "timebox title" },
        React.createElement("div", { className: "timeline" },
            React.createElement(TimeArrow, null)),
        React.createElement("div", { className: "info" },
            React.createElement("p", { className: "item-title" }, title))),
    items.map(row => React.createElement(TimeRow, { key: row.name, name: row.name, date: row.date })));
