import React from "react";
import { includeSVG } from "../helpers/icons";
import { Personal } from "../sources/DataTypes";
import { Link } from "../components/Link";

type InfoProps = { info: { name: string, value: string, icon?: string, url?: string }, multi?: boolean };

const Item = ({info, multi}: InfoProps) =>
    <div className={`block-wrapper ${multi ? "multi" : ""}`}>
        <p className="item-icon">{info.icon && includeSVG(info.icon)}</p>
        <p className="item-title">{info.name}: </p>
        <Link {...info} />
    </div>

export default ({data}: { data: Personal }) =>
    data.map(info => <Item key={info.name} info={info}/>)