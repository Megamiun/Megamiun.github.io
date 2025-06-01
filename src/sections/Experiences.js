import React from "react";
import TimeGroup from "../components/TimeGroup";
const Job = ({ place }) => {
    const items = place.position
        .map(position => ({ name: position.name, date: position.started }));
    const title = place.name
        .split('/')
        .map(fragment => React.createElement(React.Fragment, null,
        fragment,
        React.createElement("br", null)));
    return React.createElement(TimeGroup, { title: title, items: items });
};
export default ({ data }) => data.reverse().map(place => React.createElement(Job, { key: place.name, place: place }));
