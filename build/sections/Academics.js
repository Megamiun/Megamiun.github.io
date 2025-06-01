import React from "react";
import TimeGroup from "../components/TimeGroup";
export default ({ data }) => data.reverse().map(info => React.createElement(TimeGroup, { key: info.name, title: info.name, items: [{ name: `${info.level} in ${info.class}`, date: { year: info.started } }] }));
