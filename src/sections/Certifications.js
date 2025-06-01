import React from "react";
import { Link } from "../components/Link";
import TimeGroup from "../components/TimeGroup";
export default ({ data }) => data.reverse().map(info => React.createElement(TimeGroup, { key: info.name, title: React.createElement(Link, { value: info.name, url: info.url }), items: [{ name: info.technology, date: info.date }] }));
